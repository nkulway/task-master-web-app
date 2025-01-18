# Angular Application with a Rails Backend

This is the frontend part of the application built using Angular. It communicates with a Rails backend to manage tasks.

## Table of Contents

- [About](#about)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)

## About

This Angular frontend connects to a Rails backend to allow users to manage a list of tasks. The application supports basic CRUD operations: Create, Read, Update, and Delete tasks.

## Demo
<img width="1656" alt="Screenshot 2025-01-18 at 6 27 32 PM" src="https://github.com/user-attachments/assets/6e85f17b-2b66-4242-ae4c-f4f556748720" />



## Technologies Used

- **Angular**: Frontend framework used to build the UI.
- **RxJS**: Library for reactive programming and handling asynchronous operations.
- **HttpClient**: Used to make HTTP requests to the Rails API.

## Setup

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (Install it via `npm install -g @angular/cli`)

### Installation

1. Clone the repository:

    ```bash
    git clone <repo-url> frontend
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    ng serve
    ```

2. Visit `http://localhost:4200` in your browser.

The frontend will now be running, and it should be able to communicate with the backend API to manage tasks. Make sure your Rails backend is running (typically on `http://localhost:3000`).

### Connecting to the Backend

By default, the application is set to make API requests to `http://localhost:3000/tasks`. Ensure that the backend API is up and running before you test the frontend.

### Folder Structure

```bash
frontend/
├── src/
│   ├── app/
│   │   ├── components/          # Angular components (e.g., task list, add task)
│   │   ├── services/            # Service for interacting with the backend API
│   │   ├── app.component.ts     # Main component file
│   │   ├── app.component.html   # Template for the main component
│   │   ├── app.module.ts        # Main app module file
│   ├── assets/                  # Static files like images
│   ├── environments/            # Environment configurations (e.g., development, production)
│   ├── styles.css               # Global CSS styles
├── angular.json                 # Angular configuration file
├── package.json                 # Node.js dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

### API Endpoints

The Angular app interacts with the Rails backend using the following API endpoints:

- `GET /tasks`: Retrieves the list of tasks.
- `POST /tasks`: Creates a new task.
- `PATCH /tasks/:id`: Updates an existing task.
- `DELETE /tasks/:id`: Deletes a task.
