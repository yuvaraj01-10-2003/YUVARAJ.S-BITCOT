# Fresher Machine Test - React App

This is a simple React coding assessment project built using Vite, functional components, and Flexbox for basic styling.

## Features

- **Contacts View Screen**: Fetches sample contacts from an API and displays them in a list.
- **Add Contact**: Modal form to add a new contact with simple validation.
- **Edit Contact**: Modal form to edit an existing contact's details.
- **Delete Contact**: Removes a contact from the list with a confirmation dialog.
- **View Contact**: Read-only modal to view full contact details.
- **Search Contacts**: Filter contacts by first name, last name, or phone number.

## Technology Stack

- React (Vite template)
- Functional Components
- React Hooks (`useState`, `useEffect`)
- Basic Vanilla CSS (Flexbox)

## Project Structure

```
src/
├── App.jsx            // Main application component & state management
├── index.css          // Global CSS styles
├── components/
│   ├── ContactList.jsx  // Renders the list of contacts
│   ├── ContactCard.jsx  // Individual contact row component
│   ├── ContactModal.jsx // Reusable modal for Add/Edit forms
│   ├── ViewModal.jsx    // Read-only modal for contact details
│   └── SearchBar.jsx    // Search input component
```

## Running the Application

1. Make sure you have Node.js installed.
2. Clone or download this project folder.
3. Open a terminal in the project directory.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to the local server URL provided (usually `http://localhost:5173`).
