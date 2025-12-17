import logging
import uuid
import subprocess
from google.cloud import storage

# Initialize the Cloud Storage client
storage_client = storage.Client()

def extract_audio(event, context):
    """
    Triggered by a change to the 'krishnasagar-videos-raw' bucket.
    This function extracts audio from an MP4 video file and saves the extracted
    audio as an MP3 file in the 'krishnasagar-videos-processed' bucket.
    
    It uses a unique TRACE_ID for logging to enable end-to-end traceability.
    """
    bucket_name = event['bucket']
    video_file = event['name']

    # Process only .mp4 files
    if not video_file.endswith(".mp4"):
        logging.info("File is not an MP4. Skipping...")
        return

    # Generate a unique trace ID for this operation
    trace_id = str(uuid.uuid4())
    logging.info(f"[TRACE_ID: {trace_id}] Starting audio extraction for file: {video_file}")

    # Define local file paths
    input_path = f"/tmp/{video_file}"
    output_audio = f"/tmp/{video_file.replace('.mp4', '.mp3')}"

    try:
        # Download the video file from the source bucket
        bucket = storage_client.bucket(bucket_name)
        blob = bucket.blob(video_file)
        blob.download_to_filename(input_path)
        logging.info(f"[TRACE_ID: {trace_id}] Downloaded {video_file} to {input_path}")

        # Use FFmpeg to extract audio
        subprocess.run(
            ["ffmpeg", "-i", input_path, "-q:a", "0", "-map", "a", output_audio],
            check=True
        )
        logging.info(f"[TRACE_ID: {trace_id}] Audio extraction completed, saved to {output_audio}")

        # Upload the extracted audio to the destination bucket
        processed_bucket = storage_client.bucket("krishnasagar-videos-processed")
        # Processing logic (extract audio)
        output_blob = processed_bucket.blob(video_file.replace(".mp4", ".mp3"))
        output_blob.upload_from_filename(output_audio)
        logging.info(f"[TRACE_ID: {trace_id}] Uploaded extracted audio to krishnasagar-videos-processed bucket")

    except Exception as e:
        logging.error(f"[TRACE_ID: {trace_id}] Error during audio extraction: {e}")
