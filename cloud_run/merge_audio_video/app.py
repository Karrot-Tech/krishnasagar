import os
import subprocess
from flask import Flask, request, jsonify
from google.cloud import storage
import logging

app = Flask(__name__)
storage_client = storage.Client()

@app.route('/merge', methods=['POST'])
def merge_audio_video():
    """
    API endpoint to merge video with translated audio.
    Expected JSON payload:
    {
      "video_file": "example_video.mp4",
      "audio_file": "example_audio.mp3"
    }
    """
    data = request.get_json()
    video_file = data.get("video_file")
    audio_file = data.get("audio_file")
    
    if not video_file or not audio_file:
        return jsonify({"error": "Missing parameters"}), 400

    logging.info(f"Processing merge for Video: {video_file} and Audio: {audio_file}")
    
    # Define local paths
    video_path = f"/tmp/{video_file}"
    audio_path = f"/tmp/{audio_file}"
    output_video_path = f"/tmp/{video_file.replace('.mp4', '_translated.mp4')}"
    
    # Download video from raw bucket and audio from processed bucket
    video_bucket = storage_client.bucket("krishnasagar-videos-raw")
    video_blob = video_bucket.blob(video_file)
    video_blob.download_to_filename(video_path)
    
    audio_bucket = storage_client.bucket("krishnasagar-videos-processed")
    audio_blob = audio_bucket.blob(audio_file)
    audio_blob.download_to_filename(audio_path)
    
    # Use FFmpeg to merge audio with video
    ffmpeg_cmd = [
        "ffmpeg", "-i", video_path, "-i", audio_path,
        "-c:v", "copy", "-c:a", "aac", "-strict", "experimental",
        output_video_path
    ]
    try:
        subprocess.run(ffmpeg_cmd, check=True)
        logging.info("Audio and video merged successfully.")
    except subprocess.CalledProcessError as e:
        logging.error(f"Error merging audio and video: {str(e)}")
        return jsonify({"error": "Merge process failed"}), 500
    
    # Upload the merged video to the final bucket
    output_bucket = storage_client.bucket("krishnasagar-videos-final")
    output_blob = output_bucket.blob(video_file.replace(".mp4", "_translated.mp4"))
    output_blob.upload_from_filename(output_video_path)
    
    logging.info(f"Final video uploaded as {video_file.replace('.mp4', '_translated.mp4')}")
    return jsonify({"message": "Video merged and uploaded successfully."}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)