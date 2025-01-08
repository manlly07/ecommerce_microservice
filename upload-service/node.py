import base64

def decode_image_from_txt(file_path, output_image_path):
    """
    Đọc chuỗi Base64 từ file .txt và ghi lại thành ảnh.
    :param file_path: Đường dẫn đến file .txt chứa chuỗi Base64
    :param output_image_path: Đường dẫn để lưu ảnh đầu ra
    """
    # 1. Đọc nội dung file .txt
    with open(file_path, 'r') as file:
        base64_data = file.read()

    # 2. Loại bỏ prefix nếu có (data:image/png;base64,...)
    if base64_data.startswith('data:image'):
        base64_data = base64_data.split(',', 1)[1]

    print(base64_data)
    # 3. Giải mã Base64 thành nhị phân
    image_data = base64.b64decode(base64_data)
    # print(image_data)
    # 4. Ghi dữ liệu nhị phân thành file ảnh
    with open(output_image_path, 'wb') as image_file:
        image_file.write(image_data)

    print(f"Ảnh đã được giải mã và lưu tại: {output_image_path}")

# Sử dụng hàm
decode_image_from_txt('image.txt', 'output_image.jpg')
