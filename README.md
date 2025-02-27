# LRNR 

## Project Overview
LRNR is a quiz generation application that uses the **Claude AI API** to create customized quizzes based on user input. Originally built with **jQuery** and **GO**, the application is being refactored into **Node.js** and **React** for improved scalability and maintainability.
This repository is a clone of LRNR, created solely for the purpose of developing and understanding E2E and unit testing in greater depth.

---

## Features
- **Quiz Generation**:
  - Users can select a topic, expertise level, number of questions, and question style.
  - Quizzes include a title, description, and a list of questions.
- **Quiz Interaction**:
  - Users are presented with one question at a time and can submit answers.
- **Responsive Design**:
  - The application is fully responsive and works seamlessly on mobile, tablet, and desktop devices.
- **AI Integration**:
  - The **Claude AI API** is used to generate quizzes dynamically based on user input.

---

## Tech Stack
- **Frontend**: React, HTML, SASS, Materialize, JavaScript
- **Backend**: Node.js, Express
- **API**: Claude AI API
- **Tools**: Git, NPM

---

## Testing
### End to end
![image](https://github.com/user-attachments/assets/55c326d6-6173-4851-bf01-61f91488cf73)

### Unit
![image](https://github.com/user-attachments/assets/a1c3a689-72af-4f80-90c3-b36b69a9d869)


## Installation Instructions
1. Clone the repository using the following command:
    ```bash
    git clone https://github.com/FelixW01/lrnr-testing.git
    ```

2. Navigate to the project directory:
    ```bash
    cd lrnr-testing
    ```
3. Navigate to the desired app directory:
    ```bash
    cd client
    cd ..
    cd server
    ```
    
4. Install Server/Client dependencies:
    ```bash
    npm install
    ```

5. Run Front-end:
    ```bash
    npm run dev
    ```
6. Test using Jest
    ```bash
    npm run test
    ```
7. Test using Cypress
    ```bash
    npx cypress run
    ```

## API Documentation

### Claude AI API
The **Claude AI API** is used to generate quizzes dynamically based on user input. The API requires the following parameters:

#### Request Parameters
- **Topic**: The subject of the quiz (e.g., "Science", "History").
- **Expertise Level**: The difficulty level (e.g., "Beginner", "Advanced").
- **Number of Questions**: The total number of questions in the quiz.
- **Question Style**: The format of the questions (e.g., "Multiple Choice", "True/False").

#### Example API Request
