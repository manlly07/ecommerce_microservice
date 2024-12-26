from PIL import Image
import numpy as np
import ultil as ultil
import matplotlib.pyplot as plt
from scipy.fftpack import dct, idct as scipy_idct
import cv2
import sys
import io

quantization_matrix = np.array([
    [16, 11, 10, 16, 24, 40, 51, 61],
    [12, 12, 14, 19, 26, 58, 60, 55],
    [14, 13, 16, 24, 40, 57, 69, 56],
    [14, 17, 22, 29, 51, 87, 80, 62],
    [18, 22, 37, 56, 68, 109, 103, 77],
    [24, 35, 55, 64, 81, 104, 113, 92],
    [49, 64, 78, 87, 103, 121, 120, 101],
    [72, 92, 95, 98, 112, 100, 103, 99]
], dtype=np.int32)

# quantization_matrix = np.array([
#     [4, 3, 4, 4, 4, 6, 11, 15],
#     [3, 3, 3, 4, 5, 8, 14, 19],
#     [3, 4, 4, 5, 8, 12, 16, 20],
#     [4, 5, 6, 7, 12, 14, 18, 20],
#     [6, 6, 9, 11, 14, 17, 21, 23],
#     [9, 12, 12, 18, 23, 22, 25, 21],
#     [11, 13, 15, 17, 21, 23, 25, 21],
#     [13, 12, 12, 13, 16, 19, 21, 21]
# ], dtype=np.int32)


# quantization_matrix = np.array([
# [80, 60, 50, 80, 120, 200, 255, 255],
#     [55, 60, 70, 95, 130, 255, 255, 255],
#     [70, 65, 80, 120, 200, 255, 255, 255],
#     [70, 85, 110, 145, 255, 255, 255,255],
#     [90, 110, 185,255, 255, 255, 255, 255],
#     [120, 175, 255, 255, 255, 255, 255, 255],
#     [245, 255, 255, 255, 255, 255, 255, 255],
#     [255, 255, 255, 255, 255, 255, 255, 255]
# ], dtype=np.int32)


block_size = 8

image_path = 'small.jpg'
# image = cv2.imread(image_path)
# yuv_image = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
# y, u, v = cv2.split(yuv_image)

y, u, v = ultil.convert_image_rgb_to_yuv(image_path) 
y_copied_matrix = y.copy()

new_y = ultil.downsampling(y)

padded_image = ultil.pad_image(new_y, block_size)
height, width = padded_image.shape

bit_string = str(width) + "x" + str(height) + "b" 
transformed = []
first_print = True
T = None
for i in range(0, height, block_size):
    for j in range(0, width, block_size):
        # lấy ra khối 8x8
        block = padded_image[i : i + block_size, j : j + block_size]
        # biến đổi dct
        # T, block_dct = ultil.dct(block, 8)   
        # block_dct = dct(block, 2)
        block_dct = dct(dct(block.T, norm='ortho').T, norm='ortho')
     
        # lượng tử hóa
        block_quant = ultil.quantize(block_dct, quantization_matrix)
        # rle 
        zigzig = ultil.zigzag_matrix_to_array(block_quant)
        rle = ultil.run_length_encoding(zigzig)
        # if(first_print):
        #     print("KHỐI 8X8 BAN ĐẦU: ")
        #     ultil.printMatrix(block)

        #     print("DCT: ")
        #     ultil.printMatrix(block_dct)

        #     print("LƯỢNG TỬ: ")
        #     ultil.printMatrix(block_quant)

        #     print("ZIGZAG: ")
        #     print(zigzig)

        #     print("RLE: ")
        #     print(rle)

        #     first_print = False
        
        bit_string += rle + "b"
string_size = sys.getsizeof(bit_string)
print(f"Kích thước của chuỗi: {string_size} bytes")
binary_representation = ' '.join(format(ord(char), '08b') for char in bit_string)
# print("Dạng nhị phân (bit):", binary_representation)

size_with_metadata = sys.getsizeof(binary_representation)
print(f"Kích thước của chuỗi với metadata: {size_with_metadata} bytes")

matrix_size = y_copied_matrix.nbytes
print(f"Kích thước của ma trận: {matrix_size} bytes")
binary_buffer = io.BytesIO(y_copied_matrix.tobytes())

print(f"Kích thước của ma trận: {sys.getsizeof(binary_buffer)} bytes")

# print(transformed)
size_mb = ultil.get_string_size_in_mb(bit_string)

rles = bit_string.split("b")
# remove last b
rles = rles[:-1]

# get width, height and remove first element
width , height = rles[0].split("x")
width = int(int(width) / block_size) 
height = int(int(height) / block_size)
rles = rles[1:]

decoded = []
for rle in rles:
    array = ultil.run_length_decoding(rle)    

    matrix = ultil.array_to_zigzag_matrix(array)

    dequantized = ultil.dequantize(matrix, quantization_matrix)

    # idct = ultil.idct(dequantized, T)
    idct = scipy_idct(scipy_idct(dequantized.T, norm='ortho').T, norm='ortho')
    # idct = ultil.idct(dequantized, block_size)
    upsampled = ultil.upsample(idct)
    # if(not(first_print)):

    #     print("RLE AFTER: ")
    #     print(rle)

    #     print("ZIGZAG AFTER: ")
    #     ultil.printMatrix(matrix)

    #     print("DEQUANTIZE: ")
    #     ultil.printMatrix(dequantized)

    #     print("IDCT: ")
    #     ultil.printMatrix(idct)

    #     print("UPSAMPLED: ")
    #     ultil.printMatrix(upsampled)
    #     first_print = True

    decoded.append(upsampled)
      
image_decoded = []
for i in range(height):
    row = []
    for j in range(width):
        row.append(decoded[j])
    image_decoded.append(np.hstack(row))
    decoded = decoded[width:]

image_decoded = np.concatenate(image_decoded)

u_width, u_height = u.shape

y_no_padding = image_decoded[:u_height, :u_width]


rgb_image = ultil.yuv_to_rgb(y_no_padding, u, v)

fig, axes = plt.subplots(1, 3, figsize=(15, 5))
axes[0].imshow(y_copied_matrix)
axes[0].set_title("KÊNH Y GỐC")
axes[0].axis('off')

axes[1].imshow(y_no_padding)
axes[1].set_title("KÊNH Y SAU ĐÓ")
axes[1].axis('off')

axes[2].imshow(rgb_image)
axes[2].set_title("KẾT QUẢ")
axes[2].axis('off')

plt.tight_layout()
plt.show()
