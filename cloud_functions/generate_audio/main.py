import logging
from google.cloud import texttospeech, storage

# Initialize clients for Storage and Text-to-Speech
storage_client = storage.Client()
tts_client = texttospeech.TextToSpeechClient()

def generate_audio(event, context):
    """
    Triggered when a new translated text file (_en.txt) is uploaded.
    Converts the English text into speech using WaveNet and saves the output as an .mp3 file.
    """
    bucket_name = event['bucket']
    text_file = event['name']

    # Process only _en.txt files
    if not text_file.endswith("_en.txt"):
        logging.info("File is not a translated transcript (_en.txt). Skipping...")
        return

    logging.info(f"Processing translated transcript: {text_file} in bucket: {bucket_name}")

    # Read the translated English text from the file
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(text_file)
    english_text = blob.download_as_text()

    # Configure the TTS request using a WaveNet voice
    synthesis_input = texttospeech.SynthesisInput(text=english_text)
    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US",
        name="en-US-Wavenet-D",  # Change the voice if desired
        ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        pitch=0.0,
        speaking_rate=1.0
    )

    try:
        response = tts_client.synthesize_speech(
            input=synthesis_input,
            voice=voice,
            audio_config=audio_config
        )
        logging.info("Text-to-Speech synthesis completed successfully.")
    except Exception as e:
        logging.error(f"Error during TTS synthesis: {str(e)}")
        return

    # Save the generated audio as an .mp3 file
    output_filename = text_file.replace("_en.txt", ".mp3")
    output_blob = bucket.blob(output_filename)
    output_blob.upload_from_string(response.audio_content)

    logging.info(f"Generated audio saved as {output_filename}")