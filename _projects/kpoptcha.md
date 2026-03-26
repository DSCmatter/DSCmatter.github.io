---
layout: page
title: Kpoptcha
description: An interactive CAPTCHA game - can you identify the K-pop idols?
img: assets/img/kpop.png
importance: 1
category: fun
github: https://github.com/DSCmatter/kpoptcha
---

A fun, K-pop themed alternative to traditional CAPTCHA verification. Instead of selecting traffic lights or crosswalks, users identify K-pop idols to prove they are human!

### Key Features
- **Idol Recognition Challenge**: Grid of random images featuring K-pop idols (Lisa, Wonyoung, Nayeon, Karina)
- **AI Assistance**: Custom Google Teachable Machine model helps identify target idols
- **Infinite Gameplay**: New randomly generated grids for each round
- **Score Tracking**: Tracks accuracy and streaks
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Fast Loading**: Images stored locally for instant access
- **Expandable**: Easy to add new idol categories

### How It Works
1. **Grid Generation**: Random grid of idol images is displayed
2. **Target Selection**: User chooses a target idol to identify
3. **Selection Challenge**: User clicks all images containing the target idol
4. **AI Hints**: Optional AI assistance highlights images containing the target idol with cyan border
5. **Score Verification**: Streak tracking based on correct identifications

### Technologies Used
- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **AI/ML**: TensorFlow.js + Google Teachable Machine
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

### AI Features
- **Teachable Machine Model**: Custom-trained model on K-pop idol images
- **Image Classification**: Detects target idol in images
- **Visual Feedback**: Highlights detected idols with cyan border
- **Accuracy Notes**: Performance varies based on pose, lighting, and image similarity to training data

### Adding New Idols
1. Create folder in `public/images/<idol_name>/`
2. Add 5-10 JPEG images of the idol
3. Update `src/data/idols.ts` with new idol details

> (｡♥‿♥｡)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <a href="https://github.com/DSCmatter/kpoptcha" target="_blank" class="btn btn-primary">View on GitHub</a>
    </div>
</div>

<div class="row">
    <div class="col-sm-12">
        <iframe src="https://dscmatter.me/kpoptcha/" width="100%" height="1000px" style="border: none; min-height: 100vh;" allowfullscreen></iframe>
    </div>
</div>