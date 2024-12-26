from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

def convert_to_bmp(image_path, output_bmp_path):
    """
    Chuyển đổi một ảnh sang định dạng BMP.
    
    Args:
        image_path (str): Đường dẫn ảnh gốc.
        output_bmp_path (str): Đường dẫn lưu ảnh BMP.

    Returns:
        numpy.ndarray: Mảng ảnh BMP dưới dạng NumPy array.
    """
    image = Image.open(image_path).convert('RGB')
    image.save(output_bmp_path, format="BMP")
    return np.array(Image.open(output_bmp_path))

def compare_color_images_bmp(bmp1, bmp2):
    """
    So sánh hai ảnh BMP màu.

    Args:
        bmp1 (numpy.ndarray): Mảng BMP đầu tiên.
        bmp2 (numpy.ndarray): Mảng BMP thứ hai.

    Returns:
        dict: Kết quả so sánh gồm MSE, SSIM, và số pixel khác biệt.
    """
    if bmp1.shape != bmp2.shape:
        raise ValueError("Hai ảnh phải có cùng kích thước để so sánh.")
    
    # Tính độ sai lệch trung bình (MSE)
    mse = np.mean((bmp1 - bmp2) ** 2)

    # Đếm số pixel khác biệt
    pixel_differences = np.sum(np.any(bmp1 != bmp2, axis=-1))  # So sánh trên kênh màu

    # Tổng số pixel
    total_pixels = bmp1.shape[0] * bmp1.shape[1]

    # Tỉ lệ khác biệt
    difference_ratio = pixel_differences / total_pixels

    # Tạo bản đồ khác biệt
    difference_map = np.abs(bmp1 - bmp2)

    return {
        "MSE": mse,
        "Total Pixel Differences": pixel_differences,
        "Difference Ratio": difference_ratio,
        "Difference Map": difference_map
    }

def visualize_difference(bmp1, bmp2, difference_map):
    """
    Hiển thị hai ảnh BMP màu và sự khác biệt.

    Args:
        bmp1 (numpy.ndarray): Mảng BMP đầu tiên.
        bmp2 (numpy.ndarray): Mảng BMP thứ hai.
        difference_map (numpy.ndarray): Bản đồ khác biệt.
    """
    plt.figure(figsize=(15, 5))

    plt.subplot(1, 3, 1)
    plt.title("Ảnh 1 (BMP)")
    plt.imshow(bmp1)
    plt.axis("off")

    plt.subplot(1, 3, 2)
    plt.title("Ảnh 2 (BMP)")
    plt.imshow(bmp2)
    plt.axis("off")

    plt.subplot(1, 3, 3)
    plt.title("Bản đồ khác biệt")
    plt.imshow(difference_map)
    plt.axis("off")

    plt.show()

# Sử dụng
image1_path = "small.jpg"  # Đường dẫn ảnh gốc
image2_path = "compressed_image.jpg"  # Đường dẫn ảnh thứ hai

bmp1_path = "image1.bmp"
bmp2_path = "image2.bmp"

# Chuyển ảnh sang BMP
bmp1 = convert_to_bmp(image1_path, bmp1_path)
bmp2 = convert_to_bmp(image2_path, bmp2_path)

# So sánh hai ảnh BMP
comparison_result = compare_color_images_bmp(bmp1, bmp2)

print("MSE (Mean Squared Error):", comparison_result["MSE"])
print("Số pixel khác biệt:", comparison_result["Total Pixel Differences"])
print("Tỉ lệ khác biệt:", comparison_result["Difference Ratio"])

# Hiển thị sự khác biệt
visualize_difference(bmp1, bmp2, comparison_result["Difference Map"])


import os

def calculate_compression_ratio(original_file_path, compressed_file_path):
    """
    Tính tỉ lệ nén giữa tệp gốc và tệp đã nén.

    Args:
        original_file_path (str): Đường dẫn đến tệp gốc (BMP).
        compressed_file_path (str): Đường dẫn đến tệp đã nén (JPG, PNG, ...).

    Returns:
        dict: Tỉ lệ nén và phần trăm tiết kiệm dung lượng.
    """
    # Lấy kích thước tệp
    original_size = os.path.getsize(original_file_path)
    compressed_size = os.path.getsize(compressed_file_path)

    # Tính toán tỉ lệ nén
    compression_ratio = original_size / compressed_size
    compression_percentage = (1 - (compressed_size / original_size)) * 100

    return {
        "Original Size (bytes)": original_size,
        "Compressed Size (bytes)": compressed_size,
        "Compression Ratio": compression_ratio,
        "Compression Percentage (%)": compression_percentage
    }

# Ví dụ sử dụng
original_file = "image1.bmp"  # Đường dẫn đến tệp BMP gốc
compressed_file = "compressed_image.jpg"  # Đường dẫn đến tệp đã nén

result = calculate_compression_ratio(original_file, compressed_file)

print(f"Kích thước tệp gốc: {result['Original Size (bytes)']} bytes")
print(f"Kích thước tệp nén: {result['Compressed Size (bytes)']} bytes")
print(f"Tỉ lệ nén: {result['Compression Ratio']:.2f}")
print(f"Phần trăm tiết kiệm dung lượng: {result['Compression Percentage (%)']:.2f}%")
