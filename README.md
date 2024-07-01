# Svelte Authentication App

This project is a simple Svelte application that demonstrates authentication and role base authorization using Svelte stores. It includes login and logout functionality with client-side state management. Using Async/Await fetch product data from API and slugs used for dynamic routes and styled using Tailwind CSS and daisy ui.

## Features

- **User Authentication**: Simple login system using a username, password, and role.
- **Role-Based Access Control**: Restrict access to certain pages based on the user's role (e.g., admin).
- **Protected Routes**: Pages that require authentication to access.
- **Persistent Authentication State**: Using local storage to persist the authentication state across page reloads.
- **User Greeting**: Display a welcome message with the user's name in the header.
- **Logout Functionality**: Users can log out, which clears their authentication state and redirects to the login page.
- Fetches product data from a API.
- Displays product information including title, price, stock, and description.
- Tailwind CSS and daisy ui for styling
