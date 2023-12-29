# Task Tracker

Welcome to the Task Tracker app! This simple web application helps you keep track of your tasks and to-dos. Whether it's for work or personal use, this app allows you to organize your tasks efficiently.

## Installation

To get started with the Task Tracker app, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-tracker.git
   ```

2. Install dependencies:

   ```bash
   cd task-tracker
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000`.

## Usage

The Task Tracker app provides a simple interface to manage your tasks. Here's how you can use it:

- **View Tasks**: Visit the home page to view your tasks. The tasks are organized by date or category.

- **Add New Task**: Use the form on the home page to add a new task. Specify the task details and choose the category (e.g., "Work" or "Personal").

- **Work List**: If a task is related to work, you can view and manage your work tasks separately by visiting the "/work" endpoint.

- **About Page**: Learn more about the Task Tracker app by visiting the "/about" page.


## Screenshots

[![Home Page]([(https://ibb.co/99K6P20))](http://localhost:3000)
## Example Endpoint

### Home Page

```bash
GET /
```

This endpoint displays your tasks organized by date or category.

### Add New Task

```bash
POST /
```

Use this endpoint to add a new task. Provide the task details and choose the category.

### Work List

```bash
GET /work
```

This endpoint displays your work tasks.

### About Page

```bash
GET /about
```

Visit this page to learn more about the Task Tracker app.

Feel free to explore and customize the app according to your needs! If you encounter any issues or have suggestions, please open an issue on this repository.
