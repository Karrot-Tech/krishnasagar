import logging
from google.cloud import translate_v2 as translate, storage

storage_client = storage.Client()
translate_client = translate.Client()

def translate_text(event, context):
    """
    Triggered when a new transcript (.txt) file is uploaded to the bucket.
    Translates Hindi text to English and saves the output as a new file with a '_en.txt' suffix.
    """
    bucket_name = event['bucket']
    text_file = event['name']

    # Only process .txt files
    if not text_file.endswith(".txt"):
        logging.info("File is not a .txt transcript. Skipping...")
        return

    logging.info(f"Processing transcript: {text_file} in bucket: {bucket_name}")

    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(text_file)
    hindi_text = blob.download_as_text()

    # Translate text to English
    try:
        result = translate_client.translate(hindi_text, target_language="en")
        english_text = result.get("translatedText")
        logging.info(f"Translation successful for {text_file}")
    except Exception as e:
        logging.error(f"Translation error: {str(e)}")
        return

    # Save the translated text as a new file with a '_en.txt' suffix
    output_blob = bucket.blob(text_file.replace(".txt", "_en.txt"))
    output_blob.upload_from_string(english_text)
    logging.info(f"Saved translated transcript as {text_file.replace('.txt', '_en.txt')}")