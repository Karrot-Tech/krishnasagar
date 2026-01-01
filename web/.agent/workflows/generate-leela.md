---
description: Generate structured Leela article content from a YouTube transcript
---

# Generate Leela Content

This workflow generates a structured JSON object for a Leela article by processing a raw transcript associated with a given `youtube_id`.

## Steps

1.  **Find Transcript**
    Search for the transcript in `data/raw-upstream-data/yt-transcripts-data.json` using the provided `youtube_id`.

2.  **Generate Content**
    Using the transcript found in step 1, generate the content with the following prompt:

    > **Role & Objective**:
    > You are an expert editor and spiritual content curator. Your task is to take the provided raw transcript of a talk by KrishnaJi and convert it into a structured article for the "Leela" section of our website.
    >
    > **Source Material**:
    > [Insert Transcript Here]
    >
    > **Instructions & Constraints**:
    > 1.  **No Hallucinations**: Stick strictly to the content of the transcript. Do not invent details.
    > 2.  **Tone**: Devotional yet analytical, clear, and engaging.
    > 3.  **Structure**:
    >     - **The Leela (The Story)**: A narrative retelling of the event. Use H3 headers if needed.
    >     - **The Conflict/Doubt**: Highlight the specific doubt, question, or skepticism that the devotee had.
    >     - **The Revelation (KrishnaJi's Reasoning)**: The core teaching or explanation given by KrishnaJi/Sai Baba that resolves the doubt. This is the most important part. Use bullet points or H4 headers for clarity.
    >     - **Scriptural References**: List any specific chapters or verses mentioned (e.g., "Sai Satcharitra Chapter 25").
    > 4.  **Formatting**: Use Markdown. Bold key terms.
    >
    > **Output Format**:
    > Return ONLY a JSON object with the following keys: `story`, `doubt`, `revelation`, `scriptural_refs`. Do not wrap in markdown code blocks.

3.  **Output Result**
    Print the generated JSON object.
