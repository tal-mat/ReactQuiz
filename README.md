# React Quiz Application

Welcome! This React Quiz Application is an American quiz about React, developed as part of the React Course by Jonas Schmedtmann. The project focused on the `useReducer` hook and the Context API.

## Features

- **Interactive Quiz**: The user can take the quiz and receive feedback on his answers.
- **Component-Based Architecture**: Utilizes React components to build the user interface.
- **High Score Tracking**: Keeps track of the highest score achieved during the quiz sessions.
- **Timed Quizzes**: Includes a time limit for each quiz based on question difficulty, adding an element of challenge.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tal-mat/ReactQuiz.git
   cd ReactQuiz
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Question API**

   The application fetches quiz questions from an API. To ensure the application works correctly, you need to run the question API server.

   **To run the API server locally:**

     ```bash
     npm run server
     ```

   * Ensure the server is running on port `8000` or update the API endpoint in the application code if using a different port.

## Usage

To start the development server and run the application locally, use:

```bash
npm start
```

This will start the development server and open the application in your default web browser. Make sure that the question API server is also running to fetch quiz data successfully.

## Troubleshooting

* **API Not Responding**: Ensure that the question API server is running and accessible at the correct URL and port. You can check this by navigating to `http://localhost:8000/questions` in your web browser.
* **Missing Questions**: If questions are not loading, verify that the API endpoint in the React application matches the URL where the API server is running.