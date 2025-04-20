# NASA Astronomy Picture of the Day (APOD)

<div align="center">

![NASA APOD](https://img.shields.io/badge/NASA-APOD-blue?style=for-the-badge&logo=nasa)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)  
![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?style=for-the-badge&logo=next.js)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

</div>

## 📋 Overview

A modern full-stack application that leverages NASA's Astronomy Picture of the Day (APOD) API to showcase stunning astronomical imagery. The application features a clean, responsive UI built with Next.js and a robust backend powered by FastAPI.

**[Live Demo](https://github.com/lfariabr/nasa-apod)**

<div align="center">
  <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" alt="NASA Logo" width="100">
</div>

## ✨ Features

- **Daily Astronomy Images**: Displays the NASA Astronomy Picture of the Day
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Media Support**: Handles both images and videos from the NASA API
- **Fast Load Times**: Optimized frontend for quick loading
- **RESTful API**: Clean, well-structured backend API

## 🛠️ Tech Stack

### Backend
- **FastAPI**: High-performance Python web framework
- **Pydantic**: Data validation and settings management
- **Async/Await**: Asynchronous request handling for better performance
- **NASA API Integration**: Secure handling of API requests

### Frontend
- **Next.js**: React framework for production
- **TypeScript**: Type-safe code
- **Component Architecture**: Modular, reusable component design
- **Modern UI**: Clean, intuitive user interface

## Architecture

```
nasa-apod/
├── backend/           # FastAPI server
│   ├── models/        # Pydantic models
│   ├── services/      # NASA API integration
│   └── main.py        # API endpoints
│
└── frontend/          # Next.js app
    ├── app/           # Pages and routing
    ├── components/    # Reusable UI components
    ├── hooks/         # Custom React hooks
    └── public/        # Static assets
```

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- NASA API Key (get one at https://api.nasa.gov/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/lfariabr/nasa-apod.git
   cd nasa-apod
   ```

2. Set up Python environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -r backend/requirements.txt
   ```

3. Configure your NASA API key:
   Create a `.env` file in the backend directory with:
   ```
   NASA_API_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```bash
   uvicorn backend.main:app --reload
   ```
   The API will be available at http://localhost:8000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000

## Usage

- Visit the homepage to see the latest Astronomy Picture of the Day
- Click "LOAD IMAGE" to fetch the current APOD
- Enjoy the beautiful imagery and read the detailed explanation

## Future Enhancements

- [X] Date selection for viewing historical APOD images
- [X] Plug in OpenAPI with button "ELIGHTEN ME" to display fun facts
- [ ] Dark/Light theme toggle
- [ ] Image gallery of favorites
- [ ] Social sharing functionality

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- NASA for providing the APOD API
- The open-source community for the amazing tools and libraries

---

<div align="center">
  <p>Created with ❤️ by <a href="https://github.com/lfariabr">Luis Faria</a></p>
</div>
