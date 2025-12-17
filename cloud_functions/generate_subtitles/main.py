import logging
from google.cloud import videointelligence, storage

# Initialize clients for Cloud Storage and Video Intelligence
storage_client = storage.Client()
video_client = videointelligence.VideoIntelligenceServiceClient()

def generate_subtitles(event, context):
    """
    Triggered when a new .mp3 file is uploaded to the krishnasagar-videos-processed bucket.
    This function uses the Video Intelligence API to generate subtitles (SRT format)
    and saves the output in the krishnasagar-videos-final bucket.
    """
    bucket_name = event['bucket']
    audio_file = event['name']

    # Process only .mp3 files
    if not audio_file.endswith(".mp3"):
        logging.info("File is not an mp3. Skipping...")
        return

    logging.info(f"Processing audio file for subtitles: {audio_file}")

    # Construct GCS URI for the audio file
    gcs_uri = f"gs://{bucket_name}/{audio_file}"

    # Configure the transcription request for subtitles
    features = [videointelligence.Feature.SPEECH_TRANSCRIPTION]
    speech_config = videointelligence.SpeechTranscriptionConfig(
        language_code="en-US",
        enable_automatic_punctuation=True
    )
    video_context = videointelligence.VideoContext(speech_transcription_config=speech_config)

    # Initiate the asynchronous video annotation request
    operation = video_client.annotate_video(
        request={"features": features, "input_uri": gcs_uri, "video_context": video_context}
    )
    logging.info("Waiting for subtitle generation operation to complete...")
    result = operation.result(timeout=600)

    # Process the results and create SRT content
    srt_lines = []
    index = 1
    for transcription in result.annotation_results[0].speech_transcriptions:
        # Use the first alternative only
        for alternative in transcription.alternatives:
            for word_info in alternative.words:
                start_time = word_info.start_time
                end_time = word_info.end_time
                text = word_info.word

                # Format timestamps as hh:mm:ss,ms (SRT format)
                start = f"{int(start_time.seconds // 3600):02}:{int((start_time.seconds % 3600) // 60):02}:{int(start_time.seconds % 60):02},{int(start_time.nanos/1000000):03}"
                end = f"{int(end_time.seconds // 3600):02}:{int((end_time.seconds % 3600) // 60):02}:{int(end_time.seconds % 60):02},{int(end_time.nanos/1000000):03}"

                srt_lines.append(f"{index}\n{start} --> {end}\n{text}\n")
                index += 1

    srt_content = "\n".join(srt_lines)

    # Save the SRT file to the krishnasagar-videos-final bucket
    output_bucket = storage_client.bucket("krishnasagar-videos-final")
    srt_filename = audio_file.replace(".mp3", ".srt")
    output_blob = output_bucket.blob(srt_filename)
    output_blob.upload_from_string(srt_content)
    logging.info(f"Subtitles saved as {srt_filename}")