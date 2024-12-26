import cv2
import numpy as np
import pywt

def subsample_422(channel):
    """Giảm kênh U hoặc V theo tỷ lệ 4:2:2 (chỉ giữ 1/2 dữ liệu theo chiều ngang)."""
    return channel[:, ::2]  # Lấy mẫu mỗi cột thứ hai

def upsample_422(channel, width):
    """Mở rộng kênh U hoặc V trở lại kích thước gốc bằng nội suy."""
    return cv2.resize(channel, (width, channel.shape[0]), interpolation=cv2.INTER_LINEAR)


def compress_channel_with_jpeg2000(channel, wavelet='haar', level=2):
    """Nén một kênh bằng mô phỏng JPEG2000 sử dụng wavelet transform."""
    # Phân tích wavelet đa cấp
    coeffs = pywt.wavedec2(channel, wavelet, level=level)
    
    # Xác định ngưỡng nén (giữ các giá trị lớn nhất)
    threshold = np.max(coeffs[0]) * 0.1  # Ngưỡng là 10% giá trị lớn nhất

    # Áp dụng ngưỡng cho các hệ số chi tiết, giữ cấu trúc tuple
    coeffs_thresh = [coeffs[0]]  # LL (tần số thấp nhất)
    for detail in coeffs[1:]:
        coeffs_thresh.append(tuple(
            np.where(np.abs(subband) > threshold, subband, 0) for subband in detail
        ))
    
    # Tái cấu trúc lại kênh từ các hệ số đã nén
    reconstructed_channel = pywt.waverec2(coeffs_thresh, wavelet)
    return reconstructed_channel.clip(0, 255).astype(np.uint8)

# Đọc ảnh và chuyển sang không gian YUV
image = cv2.imread("small.jpg")  # Đọc ảnh đầu vào
yuv_image = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
y, u, v = cv2.split(yuv_image)

# Nén chỉ kênh Y
compressed_y = compress_channel_with_jpeg2000(y)

# Giảm kênh U và V theo tỷ lệ 4:2:2
u_subsampled = subsample_422(u)
v_subsampled = subsample_422(v)

# Mở rộng lại U và V về kích thước gốc
u_upsampled = upsample_422(u_subsampled, u.shape[1])
v_upsampled = upsample_422(v_subsampled, v.shape[1])

# Ghép lại các kênh
compressed_yuv = cv2.merge((compressed_y, u_upsampled, v_upsampled))
compressed_rgb = cv2.cvtColor(compressed_yuv, cv2.COLOR_YUV2BGR)

# Lưu và hiển thị ảnh
cv2.imwrite("compressed_image.jpg", compressed_rgb)
cv2.imshow("Compressed Image", compressed_rgb)
cv2.waitKey(0)
cv2.destroyAllWindows()
