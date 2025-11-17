# NoSQL Todo Application

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-blue.svg)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC.svg)](https://tailwindcss.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A modern full-stack todo application built with React, Node.js, Express, and MongoDB. This project demonstrates best practices in full-stack development with NoSQL databases, featuring a responsive frontend and a robust RESTful API backend.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- ✅ **Full CRUD Operations**: Create, read, update, and delete todo items
- 🎨 **Modern UI**: Responsive React frontend with Tailwind CSS styling
- 🔗 **MongoDB Integration**: NoSQL database with Mongoose ODM
- 🌐 **RESTful API**: Well-structured Express.js backend with CORS support
- 🔒 **Environment Configuration**: Secure environment variable management
- ✅ **Input Validation**: Comprehensive validation and error handling
- 📱 **Responsive Design**: Mobile-first approach with modern CSS
- ⚡ **Fast Development**: Vite for rapid frontend development
- 🔄 **Real-time Updates**: Seamless frontend-backend communication

## Architecture

This application follows a client-server architecture:

- **Frontend** (`client/`): React application built with Vite, styled with Tailwind CSS
- **Backend** (`server/`): Express.js REST API server with MongoDB integration
- **Database**: MongoDB for data persistence

The frontend communicates with the backend via HTTP requests using Axios, providing a seamless user experience for managing todos.

## Tech Stack

### Frontend
- **React 19**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API communication
- **ESLint**: Code linting and formatting

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL document database
- **Mongoose**: MongoDB object modeling for Node.js
- **CORS**: Cross-origin resource sharing middleware
- **dotenv**: Environment variable management

## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or cloud instance like MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bouzayenilyes/NoSQL_MongoDB.git
   cd NoSQL_MongoDB
   ```

2. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../client
   npm install
   ```

## Environment Setup

### Backend Configuration

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Copy the environment template:
   ```bash
   cp envexample .env
   ```

3. Edit `.env` and configure the following variables:
   ```env
   MONGO_URI="mongodb://admin:admin123@localhost:27017/taskdb?authSource=admin"
   PORT=5000
   ```

   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: Server port (optional, defaults to 5000)

### Database Setup

Ensure MongoDB is running:
- **Local MongoDB**: Start your local MongoDB service
- **MongoDB Atlas**: Use your cloud connection string in the `.env` file

## Usage

### Running the Application

1. **Start the backend server**:
   ```bash
   cd server
   npm run dev
   ```
   The API server will start on `http://localhost:5000`

2. **Start the frontend development server**:
   ```bash
   cd client
   npm run dev
   ```
   The React app will start on `http://localhost:5173`

3. **Access the application**:
   Open your browser and navigate to `http://localhost:5173`

### Available Scripts

#### Frontend (`client/`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

#### Backend (`server/`)
- `npm run dev` - Start development server with nodemon

## API Documentation

The backend provides a comprehensive REST API for todo management. See the [server README](server/README.md) for detailed API documentation including:

- Complete endpoint specifications
- Request/response examples
- Error handling
- Testing with cURL examples

**Base URL**: `http://localhost:5000/api/todos`

## Project Structure

```
NoSQL_MongoDB/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoList.jsx
│   │   ├── api.js         # API client configuration
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── package.json
│   └── README.md          # Frontend documentation
├── server/                # Express.js backend API
│   ├── config/
│   │   └── db.js          # Database configuration
│   ├── models/
│   │   └── Todo.js        # MongoDB schema
│   ├── routes/
│   │   └── todos.js       # API routes
│   ├── .env               # Environment variables
│   ├── index.js           # Server entry point
│   ├── package.json
│   └── README.md          # Backend documentation
├── README.md              # Global project documentation
└── .gitignore
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
- [MongoDB](https://www.mongodb.com/) - The application data platform
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

## Contact

**Ilyes Bouzayen**

- GitHub: [@bouzayenilyes](https://github.com/bouzayenilyes)
- Project Link: [https://github.com/bouzayenilyes/NoSQL_MongoDB](https://github.com/bouzayenilyes/NoSQL_MongoDB)

For questions, suggestions, or support, please open an issue on GitHub.