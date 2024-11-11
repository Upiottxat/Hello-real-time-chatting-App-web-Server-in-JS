# Real-Time Chatting Application Server

This is the server-side implementation for a real-time chatting application using Node.js, Express, MongoDB, and Socket.IO. The server handles user authentication, real-time communication, and data persistence.
# Frontend 
https://github.com/Upiottxat/Hello-chat-client-react/tree/master

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

## Features

- User authentication using JWT and bcrypt
- Real-time messaging with Socket.IO
- Secure cookie handling
- CORS enabled for cross-origin requests
- Environment variable configuration with dotenv

## Technologies

- **Node.js**: JavaScript runtime for server-side programming
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Socket.IO**: Library for real-time web applications
- **bcryptjs**: Library for hashing passwords
- **jsonwebtoken**: Library for JSON Web Token implementation
- **cookie-parser**: Middleware for parsing cookies
- **dotenv**: Module for loading environment variables
- **cors**: Middleware for enabling CORS

## Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/realtime-chat-server.git
    cd realtime-chat-server
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Environment Variables**

    Create a `.env` file in the root directory and add your environment variables:

    ```env
    PORT=8000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the server**

    ```bash
    npm start
    ```

    The server will be available at `http://localhost:8000`.

## Usage

- **Authentication Endpoints**:
  - `POST /api/auth/signup`: Register a new user
  - `POST /api/auth/login`: Login a user
  - `POST /api/auth/logout`: Logout a user

- **Real-Time Communication**:
  - Connect to the server via Socket.IO at `ws://localhost:5000`

- **Messaging Endpoints**;
   - `POST /api/messages/send/:id`:To send a message to another user 
   -  `POST /api/messages/:id`:To retrive messages of pirticular user
-**Search Endpoints**;

   - `GET /api/users/searchByUsername`:To search a user by its username;

## Scripts

- `npm start`: Start the server using Node.js
- `npm run dev`: Start the server using nodemon for development

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
