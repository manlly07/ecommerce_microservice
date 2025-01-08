import grpc
import video_stream_pb2
import video_stream_pb2_grpc
from PIL import Image
import io
import numpy as np
import cv2

def decompress_frame_from_jpeg2000(data):

    buffer = io.BytesIO(data)
    img = Image.open(buffer)
    return np.array(img)

def play_video(video_path):
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = video_stream_pb2_grpc.VideoStreamServiceStub(channel)
        request = video_stream_pb2.VideoRequest(video_path=video_path)
        
        for chunk in stub.PlayVideo(request):
            
            frame = decompress_frame_from_jpeg2000(chunk.data)
            
            cv2.imshow('Video', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    cv2.destroyAllWindows()

if __name__ == "__main__":
    video_path = "sample.mp4" 
    play_video(video_path)
