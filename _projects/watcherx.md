---
layout: page
title: WatcherX
description: A skeleton based around a video-sharing platform which enables users to upload, process, and share videos efficiently.
img: assets/img/cloud.jpg
importance: 4
category: work
github: https://github.com/DSCmatter/WatcherX
---

![!\[alt text\](image.png)](https://media.tenor.com/abd96-3ij_AAAAAM/the-cloud-cloud.gif)

A skeleton based around a video-sharing platform which enables users to upload, process, and share videos efficiently.

### Key Features
- **Secure Uploads**: Firebase Authentication ensures only authorized users can request signed URLs for uploading videos
- **Serverless Architecture**: Fully managed services (Cloud Functions, Pub/Sub, Cloud Run, Cloud Storage, Firestore) with no VM maintenance
- **Automated Transcoding**: Videos automatically transcoded to 360p resolution using FFmpeg in Cloud Run workers
- **Auto-Scaling**: Cloud Run workers scale automatically based on message queue demand
- **Public Streaming**: Processed videos become publicly accessible for efficient streaming
- **Metadata Tracking**: Processing status, timestamps, and video information stored in Firestore
- **CORS-Enabled**: Cloud Storage configured for cross-origin requests

### How It Works
1. **Authentication**: Users log in via Firebase Authentication
2. **Upload**: Web client requests signed URL from Cloud Functions
3. **Processing**: Video upload triggers Cloud Pub/Sub message
4. **Transcoding**: Cloud Run worker processes video using FFmpeg to 360p
5. **Storage**: Processed video saved and metadata updated in Firestore
6. **Delivery**: Video becomes publicly accessible from Cloud Storage

### Technologies Used
- **Backend**: Cloud Functions (Node.js), Cloud Run (TypeScript)
- **Frontend**: Next.js + TypeScript
- **Storage**: Google Cloud Storage (GCS)
- **Database**: Firestore
- **Messaging**: Cloud Pub/Sub
- **Authentication**: Firebase Authentication
- **Containerization**: Docker
- **Video Processing**: FFmpeg
- **Infrastructure**: Google Cloud Platform (GCP)

### Architecture
Three-layer platform:
- **API Service**: Cloud Functions for authentication & signed URL generation
- **Processing Workers**: Cloud Run service for video transcoding
- **Web Client**: Next.js application for user interface

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/WatcherX" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>
