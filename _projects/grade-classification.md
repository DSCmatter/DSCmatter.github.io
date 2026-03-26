---
layout: page
title: Dry Fruit Grade Classification
description: A deep learning model to classify images of dry fruits (such as almonds and cashews) into different quality grades (for example, Grade A and Grade B).
img: assets/img/dryfruit.png
importance: 2
category: work
github: https://github.com/DSCmatter/Dryfruit_Grade_Classification
---

![](https://i.redd.it/80ilrelaucz61.png)

A deep learning model to classify images of dry fruits (such as almonds and cashews) into different quality grades (for example, Grade A and Grade B).

### Key Features
- ResNet50-based deep learning model for high-accuracy image classification
- Two-stage transfer learning strategy (feature extraction & fine-tuning)
- 99.7% validation accuracy on augmented dataset
- Large dataset: 850 original images augmented to 42,600 images
- Interactive web deployment via Hugging Face Spaces
- Supports multiple dry fruit types (almonds, cashews, etc.) and quality grades (Grade A, Grade B)

### Technologies Used
- Python
- TensorFlow
- Convolutional Neural Networks - ResNet50
- Streamlit for web app deployment
- Image processing techniques for data augmentation

### Model Results
- **Training Accuracy**: ~99.7% validation accuracy achieved through two-stage training
  - Stage 1: Feature extraction with frozen ResNet50 backbone (~99.4% accuracy)
  - Stage 2: Fine-tuning entire model with low learning rate (1e-5)
- **Inference Performance**: Real-world testing shows confidence scores frequently above 75%
- **Dataset**: 42,600 augmented training images from 850 original high-resolution (720×720) images
- **Data Augmentation**: Rotations, brightness/contrast adjustments, and noise injection for robust model generalization

### Deployment
The trained ResNet50 model is deployed as an interactive web application on **Hugging Face Spaces**, providing:
- **Easy Access**: Browse interface for uploading dry fruit images directly in your web browser
- **Real-time Predictions**: Instant classification with predicted quality grade (e.g., Grade A, Grade B)
- **Confidence Scores**: Model outputs confidence percentages for each prediction
- **No Setup Required**: Test the model without installing dependencies or running local code
- **Live Demo**: [Access the interactive application](https://huggingface.co/spaces/DSCmatter/deployment_model)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/Dryfruit_Grade_Classification" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://huggingface.co/spaces/DSCmatter/deployment_model" target="_blank" class="btn btn-primary">Try Live Demo</a>
    </div>
</div>
