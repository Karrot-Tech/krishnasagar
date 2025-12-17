import logging
import os
from google.cloud import speech, storage

# Initialize clients for Cloud Storage and Speech-to-Text
storage_client = storage.Client()
speech_client = speech.SpeechClient()

def transcribe_audio(event, context):
    """
    Triggered by a change to a Cloud Storage bucket.
    This function transcribes Hindi speech from an .mp3 file uploaded to the bucket
    and saves the transcript as a .txt file in the same bucket.
    """
    bucket_name = event['bucket']
    audio_file = event['name']

    # Proceed only if the file is an MP3
    if not audio_file.endswith(".mp3"):
        logging.info("Not an MP3 file. Skipping...")
        return

    logging.info(f"Processing file: {audio_file} in bucket: {bucket_name}")

    # Construct the GCS URI for the audio file
    gcs_uri = f"gs://{bucket_name}/{audio_file}"

    # Configure transcription request parameters
    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.MP3,
        language_code="hi-IN",  # Hindi (India)
        enable_automatic_punctuation=True,
        model="default"
    )

    try:
        # Transcribe the audio file
        response = speech_client.recognize(config=config, audio=audio)
        transcript = "\n".join([result.alternatives[0].transcript for result in response.results])
        logging.info(f"Transcription successful for {audio_file}")
    except Exception as e:
        logging.error(f"Error during transcription: {str(e)}")
        return

    # Save the transcript as a text file in the same bucket
    output_bucket = storage_client.bucket(bucket_name)
    transcript_filename = audio_file.replace(".mp3", ".txt")
    output_blob = output_bucket.blob(transcript_filename)
    output_blob.upload_from_string(transcript)

    logging.info(f"Transcript saved as {transcript_filename}")