# 🤖 SmartChatAI

SmartChatAI is a Full Stack AI-powered chatbot application built using **React**, **Spring Boot**, **Spring AI**, and **Google Gemini**. The application allows users to ask questions through a modern web interface and receive intelligent AI-generated responses in real time.

---

## 🚀 Features

* AI-powered chatbot using Google Gemini
* Modern React frontend
* Spring Boot REST API backend
* Spring AI integration
* Real-time question and answer interaction
* Axios-based frontend-backend communication
* Responsive and clean user interface
* Cross-Origin Resource Sharing (CORS) support
* Ready for cloud deployment

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)
* CSS3
* Axios

### Backend

* Java
* Spring Boot
* Spring AI
* REST API
* Maven

### AI Model

* Google Gemini API

### Tools

* IntelliJ IDEA
* Visual Studio Code
* Git
* GitHub
* Postman

---

## 📁 Project Structure

```text
SmartChatAI
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/AdityaPandey98-Dev/SmartChatAI.git
```

```bash
cd SmartChatAI
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Configure your Gemini API Key.

```properties
spring.ai.google.genai.api-key=${GEMINI_API_KEY}
```

Set the environment variable:

```text
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the Spring Boot application.

```bash
mvn spring-boot:run
```

Backend will start on:

```text
http://localhost:9999
```

---

## Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the React application.

```bash
npm run dev
```

Frontend will start on:

```text
http://localhost:5173
```

---

## API Endpoint

### Ask AI

**POST**

```text
/api/ask
```

### Request

```json
{
  "question": "Explain Spring Boot."
}
```

### Response

```text
Spring Boot is a Java framework that simplifies building production-ready applications by reducing configuration and providing built-in features.
```

---

## Application Flow

```text
User
   │
   ▼
React Frontend
   │
Axios HTTP Request
   │
Spring Boot REST API
   │
Spring AI
   │
Google Gemini
   │
AI Response
   │
React UI
```

---

## Future Enhancements

* Chat history
* Markdown response rendering
* Loading animations
* Dark mode
* User authentication
* Conversation memory
* Streaming AI responses
* File upload support
* PDF summarization
* Image generation
* Deployment with Docker
* CI/CD using GitHub Actions

---

## Learning Outcomes

This project demonstrates:

* React Component Architecture
* State Management using React Hooks
* REST API Development
* Spring Boot Backend Development
* Spring AI Integration
* Google Gemini API Integration
* Frontend and Backend Communication using Axios
* CORS Configuration
* Error Handling
* API Testing using Postman
* Full Stack Application Development


