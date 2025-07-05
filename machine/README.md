# React + Bootstrap 5 Project

This is a React application set up with Bootstrap 5 for modern, responsive web development.

## Features

- ⚛️ React 18 with TypeScript
- 🎨 Bootstrap 5.3.2 for styling and components
- 📱 Responsive design out of the box
- 🚀 Modern development setup with Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Bootstrap 5 Integration

Bootstrap 5 is fully integrated and ready to use. The setup includes:

- CSS: `bootstrap/dist/css/bootstrap.min.css`
- JavaScript: `bootstrap/dist/js/bootstrap.bundle.min.js`

### Using Bootstrap Components

You can use all Bootstrap 5 components directly in your JSX:

```jsx
import React from "react";

function MyComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bootstrap Card</h5>
              <p className="card-text">This is a Bootstrap card component.</p>
              <button className="btn btn-primary">Click me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Custom styles
├── index.tsx        # Application entry point
└── index.css        # Global styles
```

## Customization

- Modify `src/App.css` to add custom styles that complement Bootstrap
- Bootstrap classes can be used directly in your components
- The project includes example components demonstrating Bootstrap usage

## Learn More

- [React Documentation](https://reactjs.org/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
