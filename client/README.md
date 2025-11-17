# Todo App Frontend

[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive React frontend for the NoSQL Todo application. Built with React 19, Vite, and Tailwind CSS, this frontend provides an intuitive user interface for managing todo items through a RESTful API.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)

## Features

- 🎯 **Todo Management**: Create, read, update, and delete todo items
- 📱 **Responsive Design**: Mobile-first approach with modern CSS
- ⚡ **Fast Development**: Vite for rapid development and hot module replacement
- 🎨 **Modern UI**: Clean, intuitive interface with Tailwind CSS
- 🔄 **Real-time Updates**: Seamless communication with the backend API
- ✅ **Form Validation**: Client-side validation for user inputs
- 🎭 **Component Architecture**: Modular, reusable React components

## Tech Stack

- **React 19**: Latest version of React with modern hooks and features
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API communication
- **ESLint**: Code linting and quality assurance
- **React DOM**: React rendering library

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Backend API server running (see [server README](../server/README.md))

## Installation

1. **Navigate to the client directory**:
   ```bash
   cd client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**:
   Navigate to `http://localhost:5173` to access the application.

3. **Ensure backend is running**:
   Make sure the backend API server is running on `http://localhost:5000` for full functionality.

## Project Structure

```
client/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo
│   ├── components/
│   │   ├── TodoForm.jsx      # Form for creating new todos
│   │   ├── TodoItem.jsx      # Individual todo item component
│   │   └── TodoList.jsx      # List container for todos
│   ├── api.js                # Axios configuration and API calls
│   ├── App.css               # Global styles
│   ├── App.jsx               # Main application component
│   ├── index.css             # Tailwind CSS imports and global styles
│   └── main.jsx              # Application entry point
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── README.md                 # This file
└── vite.config.js            # Vite configuration
```

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## API Integration

The frontend communicates with the backend API using Axios. The API configuration is defined in `src/api.js`:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;
```

### API Endpoints Used

- `GET /todos` - Fetch all todos
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## Styling

The application uses Tailwind CSS for styling with a custom design system:

- **Color Scheme**: Modern dark/light theme with accent colors
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Flexbox and grid-based responsive layouts
- **Components**: Styled with utility classes for consistency

### Custom Styles

Additional custom styles are defined in `src/index.css` and `src/App.css` for specific component styling and global overrides.

## Components

### TodoForm
Handles creation of new todo items with form validation.

### TodoItem
Displays individual todo items with edit/delete functionality.

### TodoList
Container component that manages the list of todos and their state.

## Contributing

1. Follow the existing code style and component structure
2. Ensure all components are properly typed (if using TypeScript)
3. Test your changes with the backend API
4. Run `npm run lint` before committing
5. Follow React best practices and hooks guidelines

## Development Notes

- The application assumes the backend API is running on `http://localhost:5000`
- Hot module replacement is enabled for fast development
- ESLint is configured for React and modern JavaScript
- The build process optimizes the application for production deployment

For more information about the backend API, see the [server README](../server/README.md).
