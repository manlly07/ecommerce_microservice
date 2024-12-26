import numpy as np
from PIL import Image
import sys
import cv2

def convert_rgb_to_yuv(r, g, b):
    # Công thức chuyển đổi RGB -> YUV
    Y = 0.299 * r + 0.587 * g + 0.114 * b
    U = -0.14713 * r - 0.28886 * g + 0.436 * b
    V = 0.615 * r - 0.51499 * g - 0.10001 * b

    # Chuyển giá trị U, V về phạm vi không âm (nếu cần)
    U = U + 128
    V = V + 128

    # Làm tròn và chuyển sang kiểu uint8
    Y = np.clip(Y, 0, 255).astype(np.uint8)
    U = np.clip(U, 0, 255).astype(np.uint8)
    V = np.clip(V, 0, 255).astype(np.uint8)

    return Y, U, V

def yuv_to_rgb(y_channel, u_channel, v_channel):

    Y = y_channel.astype(np.float32)
    U = u_channel.astype(np.float32) - 128
    V = v_channel.astype(np.float32) - 128

    R = Y + 1.13983 * V
    G = Y - 0.39465 * U - 0.58060 * V
    B = Y + 2.03211 * U

    # Ghép các kênh lại thành mảng RGB
    rgb_image = np.stack([R, G, B], axis=-1)

    # Cắt giá trị để nằm trong phạm vi hợp lệ [0, 255] và chuyển về uint8
    rgb_image = np.clip(rgb_image, 0, 255).astype(np.uint8)
    image = Image.fromarray(rgb_image, 'RGB')

    # LƯU ẢNH
    image.save("compressed_image.jpg")
    return rgb_image

    new_y_channel = np.clip(y_channel, 0, 255).astype(np.uint8)
    new_u_channel = np.clip(u_channel, 0, 255).astype(np.uint8)
    new_v_channel = np.clip(v_channel, 0, 255).astype(np.uint8)

    print(new_y_channel.dtype, new_u_channel.dtype, new_v_channel.dtype)
    yuv_image = cv2.merge((new_y_channel, new_u_channel, new_v_channel))
    rgb_image = cv2.cvtColor(yuv_image, cv2.COLOR_YUV2RGB)
    return rgb_image

def convert_image_rgb_to_yuv(input_image_path):
    # Mở ảnh sử dụng OpenCV
    # image = cv2.imread(input_image_path)
    # yuv_image = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
    # y, u, v = cv2.split(yuv_image)
    # print(y.dtype, u.dtype, v.dtype)
    # return y, u, v

    # Mở ảnh sử dụng Pillow
    img = Image.open(input_image_path)

    # # Chuyển ảnh thành mảng numpy
    img_array = np.array(img)

    # # Tạo mảng rỗng cho các kênh Y, U, V
    y_channel = np.zeros_like(img_array[:, :, 0], dtype=np.uint8)
    u_channel = np.zeros_like(img_array[:, :, 0], dtype=np.uint8)
    v_channel = np.zeros_like(img_array[:, :, 0], dtype=np.uint8)

    # # Duyệt qua từng pixel trong ảnh và chuyển đổi RGB sang YUV
    for i in range(img_array.shape[0]):
        for j in range(img_array.shape[1]):
            r, g, b = img_array[i, j]
            y, u, v = convert_rgb_to_yuv(r, g, b)
            y_channel[i, j] = y
            u_channel[i, j] = u
            v_channel[i, j] = v

    return y_channel, u_channel, v_channel

def printMatrix(y):
    
    rows, cols = min(8, y.shape[0]), min(8, y.shape[1])
    for i in range(rows):
        for j in range(cols):
            print(str(round(y[i, j], 2)) + " ", end="")
        print("\n")

def downsampling(matrix):
    matrix = matrix.astype(np.int16)
    new_matrix = np.zeros_like(matrix)
    for i in range(matrix.shape[0]):
        for j in range(matrix.shape[1]):
            new_matrix[i][j] = matrix[i][j] - 127
    return new_matrix

def upsample(matrix):
    matrix = matrix.astype(np.int16)
    new_matrix = np.zeros_like(matrix)
    for i in range(matrix.shape[0]):
        for j in range(matrix.shape[1]):
            new_matrix[i][j] = matrix[i][j] + 127
    return new_matrix

def quantize(dct_image, quantization_matrix):
    return np.round(dct_image / quantization_matrix)

def dequantize(quantized_image, quantization_matrix):
    return quantized_image * quantization_matrix

def zigzag_matrix_to_array(matrix):
    N = matrix.shape[0]  # Kích thước ma trận NxN
    result = []

    # Duyệt qua từng đường chéo
    for sum_index in range(2 * N - 1):
        # Xác định các chỉ số bắt đầu của đường chéo
        if sum_index < N:
            start_row = sum_index
            start_col = 0
        else:
            start_row = N - 1
            start_col = sum_index - (N - 1)

        # Đi qua đường chéo theo hướng zig-zag
        row, col = start_row, start_col
        diagonal = []

        while row >= 0 and col < N:
            diagonal.append(matrix[row, col])
            row -= 1
            col += 1

        # Nếu đường chéo là số chẵn, giữ nguyên thứ tự, nếu lẻ đảo ngược
        if sum_index % 2 == 0:
            result.extend(diagonal)
        else:
            result.extend(diagonal[::-1])

    return np.array(result)

# def run_length_encoding(arr):
#     """Áp dụng Run-Length Encoding (RLE) cho mảng"""
#     count_dict = {}
#     # Duyệt qua từng phần tử trong mảng
#     for num in arr:
#         if(num == -0.0):
#           num = np.abs(num)
#         if num in count_dict:
#             count_dict[num] += 1  # Tăng số đếm nếu đã có phần tử
#         else:
#             count_dict[num] = 1  # Nếu chưa có, khởi tạo số đếm là 1
#     count_list = [(str(key), value) for key, value in count_dict.items()]

#     return count_list

def run_length_encoding(values):
    # encoded = []
    encoded = ""
    count = 1
    for i in range(1, len(values)):
        # if(values[i] == -0): values[i] = 0
        if values[i] == values[i - 1]:
            count += 1
        else:
            # encoded.append((values[i - 1], count))
            encoded += str(values[i - 1]) + "n" + str(count) + ":"
            count = 1
    # Đừng quên thêm giá trị cuối cùng
    # encoded.append((values[-1], count))
    encoded += str(values[-1]) + "n" + str(count)
    return encoded

def array_to_zigzag_matrix(array, N = 8):
    # Tạo ma trận rỗng NxN
    matrix = np.zeros((N, N), dtype=array.dtype)
    index = 0  # Vị trí hiện tại trong mảng một chiều

    # Duyệt qua từng đường chéo
    for sum_index in range(2 * N - 1):
        # Xác định các chỉ số bắt đầu của đường chéo
        if sum_index < N:
            start_row = sum_index
            start_col = 0
        else:
            start_row = N - 1
            start_col = sum_index - (N - 1)

        # Xác định hướng zig-zag của đường chéo
        row, col = start_row, start_col
        diagonal = []

        while row >= 0 and col < N:
            diagonal.append((row, col))
            row -= 1
            col += 1

        # Nếu đường chéo là số chẵn, giữ nguyên thứ tự, nếu lẻ đảo ngược
        if sum_index % 2 == 0:
            for r, c in diagonal:
                matrix[r, c] = array[index]
                index += 1
        else:
            for r, c in reversed(diagonal):
                matrix[r, c] = array[index]
                index += 1

    return matrix


def run_length_decoding(encoded):
    # Chuỗi giải mã
    decoded = []
    
    # Tách các phần bằng dấu ":" (mỗi phần là một cặp giá trị và tần suất)
    encoded_pairs = encoded.split(":")
    
    # Lặp qua từng phần và tách giá trị và tần suất
    for pair in encoded_pairs:
        # Tách giá trị và tần suất bằng "n"
        value, count = pair.split("n")
        
        # Chuyển đổi giá trị và tần suất về kiểu dữ liệu đúng (giá trị int)
        value = int(float(value))  # Convert to float and then to int
        count = int(float(count))
        
        # Thêm giá trị vào danh sách theo tần suất
        decoded.extend([value] * count) 
    
    return np.array(decoded)

# def huffman_encoding(arr):
#     huff_tree = huffman.codebook(arr)
#     return huff_tree

def convert_to_bit_string(arr, huffman_tree):
    bit_string = ""
    for num in arr:
        bit_string += huffman_tree[str(num)]
    return bit_string


def decode_huffman(encoded_str, huffman_codes):
    decoded_str = []
    current_code = ''
    huffman_values = list(huffman_codes.values())
    huffman_codes = list(huffman_codes.keys())

    for bit in encoded_str:
        current_code += bit

        if current_code in huffman_values:
            index = huffman_values.index(current_code)
            decoded_str.append(huffman_codes[index])
            current_code = ''

    return decoded_str


def pad_image(image, block_size=8):
    height, width = image.shape

    pad_height = (block_size - height % block_size) % block_size
    pad_width = (block_size - width % block_size) % block_size

    padded_image = np.pad(image, ((0, pad_height), (0, pad_width)), mode='constant', constant_values=0)

    return padded_image

def dct(image, block_size):
    T = np.zeros((block_size, block_size))
    for i in range(block_size):
        for j in range(block_size):
            if i == 0:
                T[i, j] = 1 / block_size
            else:
                T[i, j] = np.sqrt(2 / block_size) * np.cos((2 * j + 1) * i * np.pi / (2 * block_size))
    return T, T @ image @ T.T

def idct(image, block_size):
    # T = np.zeros((block_size, block_size))
    T = block_size
    # for i in range(block_size):
    #     for j in range(block_size):
    #         if i == 0:
    #             T[i, j] = 1 / block_size 
    #         else:
    #             T[i, j] = np.sqrt(2 / block_size) * np.cos((2 * j + 1) * i * np.pi / (2 * block_size))

    # Áp dụng IDCT (DCT ngược)
    return T.T @ image @ T

def get_string_size_in_mb(s):
    # Tính kích thước chuỗi trong byte
    size_in_bytes = sys.getsizeof(s)
    
    # Chuyển đổi byte sang MB
    size_in_mb = size_in_bytes / (1024 * 1024)  # 1 MB = 1024 * 1024 bytes
    return size_in_mb


def get_image_size_in_mb(image_path):
    # Mở hình ảnh
    with Image.open(image_path) as img:
        # Lấy kích thước (width, height) của hình ảnh
        width, height = img.size
        
        # Lấy định dạng màu sắc của hình ảnh (RGB, RGBA, Grayscale, ...)
        mode = img.mode
        
        # Tính số byte mỗi pixel dựa trên mode của hình ảnh
        if mode == 'RGB':
            bytes_per_pixel = 3  # 3 bytes mỗi pixel (1 byte cho Red, Green, Blue)
        elif mode == 'RGBA':
            bytes_per_pixel = 4  # 4 bytes mỗi pixel (1 byte cho Red, Green, Blue, Alpha)
        elif mode == 'L':
            bytes_per_pixel = 1  # 1 byte mỗi pixel (grayscale)
        else:
            raise ValueError(f"Không hỗ trợ định dạng hình ảnh: {mode}")
        
        # Tính kích thước của hình ảnh trong byte
        size_in_bytes = width * height * bytes_per_pixel
        
        # Chuyển đổi byte sang MB
        size_in_mb = size_in_bytes / (1024 * 1024)  # 1 MB = 1024 * 1024 bytes
        
        return size_in_mb
    


def get_beweent_matrix(large_matrix):
    # Xác định các chỉ số trung tâm
    center_row = large_matrix.shape[0] // 2
    center_col = large_matrix.shape[1] // 2

    # Tính toán phạm vi để lấy ma trận 8x8
    start_row = center_row - 4  # 4 là nửa chiều cao của ma trận 8x8
    start_col = center_col - 4  # 4 là nửa chiều rộng của ma trận 8x8
    end_row = start_row + 8
    end_col = start_col + 8
    center_matrix = large_matrix[start_row:end_row, start_col:end_col]

    print(center_matrix)

    return center_matrix
