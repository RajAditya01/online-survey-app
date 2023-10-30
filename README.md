# Online Survey Application
This is a basic online survey application that allows users to create and participate in surveys. The application is divided into two main modules: the Survey Creation Module and the Survey Participation Module.

# Features
-Authentication-

User registration and login functionality is implemented using JSON Web Tokens (JWT) for authentication.

-Survey Creation-

Authenticated users can create surveys by providing a title and a list of questions.
Each question supports different question types (e.g., multiple choice, text input).
Survey creators can specify whether the survey is public or private.

-Survey Participation-

Users (both authenticated and unauthenticated) can view a list of public surveys.
Authenticated users can participate in surveys by answering questions.
Validation is implemented to ensure that users can participate only once in a specific survey.

-Results Viewing-

Survey creators and participants can view the results of a survey, which include statistics on how each question was answered.

-Tech Stack-

Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB for storing survey data and results.
Authentication: JWT for user authentication.
State Management: Redux or React Context API.
Frontend Framework: Material-UI or Bootstrap for a polished interface.
Validation: Implemented for user input and survey participation.

