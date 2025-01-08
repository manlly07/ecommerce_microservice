import grpc
from concurrent import futures
import video_stream_pb2
import video_stream_pb2_grpc
import cv2
import numpy as np
from PIL import Image
import io

def compress_frame_to_jpeg2000(frame):
    """
    Nén khung hình thành JPEG2000.
    """
    img = Image.fromarray(frame)
    buffer = io.BytesIO()
    img.save(buffer, format="JPEG2000")
    return buffer.getvalue()

class VideoStreamService(video_stream_pb2_grpc.VideoStreamServiceServicer):
    def PlayVideo(self, request, context):
        cap = cv2.VideoCapture(request.video_path)
        if not cap.isOpened():
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details(f"Video not found: {request.video_path}")
            return

        frame_index = 0
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            compressed_frame = compress_frame_to_jpeg2000(frame)

            yield video_stream_pb2.VideoChunk(data=compressed_frame, frame_index=frame_index)
            frame_index += 1

        cap.release()

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    video_stream_pb2_grpc.add_VideoStreamServiceServicer_to_server(VideoStreamService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server started at port 50051")
    server.wait_for_termination()

if __name__ == "__main__":
    serve()
