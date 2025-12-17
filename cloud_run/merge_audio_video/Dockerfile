FROM python:3.9-slim

WORKDIR /app

# Setup Python virtual environment
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

# Upgrade pip and install dependencies (make sure gunicorn is in requirements.txt)
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Install FFmpeg
RUN apt-get update && apt-get install -y ffmpeg && apt-get clean

# Copy application code
COPY . .

# Use gunicorn directly (not via python -m)
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]