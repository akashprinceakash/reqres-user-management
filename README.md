# React User Management App with Reqres API

A responsive React application for user management that integrates with the Reqres mock API, featuring authentication, user listing with pagination, and CRUD operations.

## Features

- **User Authentication**
  - Login with email/password
  - token storage
  - Protected routes

- **User Management**
  - List all users with pagination
  - Search and filter users
  - Edit user details
  - Delete users

- **Enhanced Functionality**
  - Client-side state persistence for edits
  - Responsive Material-UI design
  - Form validation
  - Error handling

## Demo

[Live Demo](https://your-demo-link-here.com) (if deployed)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reqres-user-management.git
   cd reqres-user-management

2. Install dependencies:
   ```bash
   npm install
   
4. Start the development server:
   ```bash
    npm start
 
6. Open your browser at:
  ```bash
   http://localhost:3000
```

<b>Usage</b>

<b>Login Credentials</b>
Use these test credentials to log in:

Email: eve.holt@reqres.in

Password: cityslicka

<b>Key Functionality</b>
1.<b>Authentication</b>

Login with the provided credentials

Automatic redirection to user list after login

Logout button in the navigation

2.<b>User List</b>

Paginated display of users

Search functionality

Responsive card layout

3.<b>User Operations</b>

Click "Edit" to modify user details

Click "Delete" to remove users

Changes persist locally (Reqres is a mock API)

<b>Technical Details</b>
<b>Technologies Used</b>
React

React Router

Material-UI (MUI)

Axios for HTTP requests

Context API for state management
