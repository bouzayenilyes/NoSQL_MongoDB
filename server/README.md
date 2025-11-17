# NoSQL Todo API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-blue.svg)](https://www.mongodb.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A robust RESTful API for managing todo items, built with modern JavaScript technologies. This project demonstrates best practices in backend development with NoSQL databases.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- ✅ Full CRUD operations for todo management
- 🔗 MongoDB integration with Mongoose ODM
- 🌐 CORS enabled for cross-origin requests
- 🔒 Environment-based configuration
- ✅ Input validation and comprehensive error handling
- 📝 Automatic timestamp tracking (created/updated)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Utilities**: CORS, dotenv
- **Development**: Nodemon

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or cloud instance)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bouzayenilyes/NoSQL_MongoDB.git
   cd NoSQL_MongoDB
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy the example environment file:
     ```bash
     cp envexample .env
     ```
   - Edit `.env` and update the `MONGO_URI` with your MongoDB connection string
   - Optionally, modify the `PORT` (defaults to 5000 if not specified)

4. **Start MongoDB** (if running locally):
   Ensure MongoDB is running on your system or update the connection string for a cloud instance.

5. **Start the development server**:
   ```bash
   npm run dev
   ```

The server will start and display a message indicating it's running on `http://localhost:5000` (or your configured port).

## Environment Variables

Create a `.env` file in the root directory with the following variables:

- `MONGO_URI`: Your MongoDB connection string
- `PORT`: Server port (optional, defaults to 5000)

Example:
```
MONGO_URI="mongodb://admin:admin123@localhost:27017/taskdb?authSource=admin"
PORT=5000
```

## API Endpoints

The API provides RESTful endpoints for todo management. All endpoints return JSON responses.

**Base URL**: `http://localhost:5000/api/todos`

### Todo Schema

Each todo object follows this structure:

```json
{
  "_id": "ObjectId",
  "task": "string (required)",
  "name": "string (required)",
  "completed": "boolean (default: false)",
  "createdAt": "Date"
}
```

### Endpoints

#### 1. Create a Todo
- **Method**: `POST`
- **Endpoint**: `/api/todos`
- **Request Body**:
  ```json
  {
    "task": "Complete project documentation",
    "name": "Documentation Task"
  }
  ```
- **Success Response** (201):
  ```json
  {
    "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
    "task": "Complete project documentation",
    "name": "Documentation Task",
    "completed": false,
    "createdAt": "2023-09-01T10:00:00.000Z"
  }
  ```
- **Error Response** (400):
  ```json
  {
    "message": "Validation error message"
  }
  ```

#### 2. Get All Todos
- **Method**: `GET`
- **Endpoint**: `/api/todos`
- **Success Response** (200):
  ```json
  [
    {
      "_id": "64f1a2b3c4d5e6f7g8h9i0j1",
      "task": "Complete project documentation",
      "name": "Documentation Task",
      "completed": false,
      "createdAt": "2023-09-01T10:00:00.000Z"
    }
  ]
  ```

#### 3. Get a Single Todo
- **Method**: `GET`
- **Endpoint**: `/api/todos/:id`
- **Success Response** (200): Returns the todo object
- **Error Response** (404):
  ```json
  {
    "message": "Todo not found"
  }
  ```

#### 4. Update a Todo
- **Method**: `PUT`
- **Endpoint**: `/api/todos/:id`
- **Request Body**: Any fields to update
  ```json
  {
    "task": "Updated documentation task",
    "completed": true
  }
  ```
- **Success Response** (200): Returns the updated todo object
- **Error Responses**: 400 (validation) or 404 (not found)

#### 5. Delete a Todo
- **Method**: `DELETE`
- **Endpoint**: `/api/todos/:id`
- **Success Response** (200):
  ```json
  {
    "message": "Todo deleted successfully"
  }
  ```
- **Error Response** (404):
  ```json
  {
    "message": "Todo not found"
  }
  ```

### Testing with cURL

Create a new todo:
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"task": "Test task", "name": "Test"}'
```

Get all todos:
```bash
curl http://localhost:5000/api/todos
```

## Project Structure

```
NoSQL_MongoDB/
├── config/
│   └── db.js              # Database connection configuration
├── models/
│   └── Todo.js            # Todo mongoose schema
├── routes/
│   └── todos.js           # Todo API routes
├── .gitignore             # Git ignore rules
├── envexample             # Environment variables template
├── index.js               # Application entry point
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
└── README.md              # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [MongoDB](https://www.mongodb.com/) - NoSQL database

## Contact

**Ilyes Bouzayen**

- GitHub: [@bouzayenilyes](https://github.com/bouzayenilyes)
- Project Link: [https://github.com/bouzayenilyes/NoSQL_MongoDB](https://github.com/bouzayenilyes/NoSQL_MongoDB)

For questions or support, please open an issue on GitHub.