# Star Wars App

This is a React-based application for displaying information about Star Wars characters, their films, starships, and related data.

## Features

- View detailed information about Star Wars characters
- Visual representation of characters, films, and starships with ReactFlow
- Search functionality to find specific characters
- Explore detailed information about characters, the films they appeared in, and the starships they used, all in an interactive flow
- Pagination support for character lists
- Error handling and graceful fallbacks
- "Not Found" page for handling invalid routes or missing data

## Tech Stack

- **React** - JavaScript library for building user interfaces.
- **TypeScript** - A superset of JavaScript that adds static types for improved developer experience and code quality.
- **React Flow** - A library for building node-based applications.
- **Jest** - A testing framework used for unit and integration tests.
- **React Testing Library** - For testing React components.
- **Axios** - A promise-based HTTP client used for making API requests.

## Setup Instructions

To run the project locally, follow the steps below:

### 1. Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/MykhailoMatsyshyn/StarWarsApp
```

### 2. Install dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd star-wars-app
npm install
```

### 3. Run the development server

Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

The app will be running at `http://localhost:5173`.

### 4. Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will run all tests in the project. You can also specify a particular test file to run, for example:

```bash
npm test -- --testPathPattern=PersonsList.test.tsx
```

### 5. Build the app

To create a production build of the app, use the following command:

```bash
npm run build
```

This will create a `build` directory with the production version of your app.

## Folder Structure

```bash
.
├── .gitignore                # A file that specifies which files and directories Git should ignore.
├── eslint.config.js          # ESLint configuration to enforce code style and catch errors.
├── index.html                # The main HTML file containing the structure of the web page.
├── jest.config.cjs           # Jest configuration used to set up the testing environment.
├── package-lock.json         # Automatically generated file that locks the exact version of dependencies.
├── package.json              # Contains metadata and dependencies for the project.
├── public                    # Folder for public assets accessible by the browser.
│   └── starWarsIcon.svg      # SVG icon used in the interface or as a favicon.
├── README.md                 # Documentation for users and developers, including instructions and project description.
├── src                       # Folder containing the source code for the application.
│   ├── api                   # Folder for files that handle API interactions.
│   │   ├── sw-api.ts         # File for interacting with the Star Wars API.
│   │   └── types.ts          # Types for working with the API, providing type definitions.
│   ├── assets                # Folder for images and media files.
│   │   ├── starwarscharacters.png  # Image used in the app.
│   │   ├── starWarsIcon.svg  # Icon used in the app.
│   │   └── trooper.png       # Another image used in the app.
│   ├── components            # Folder for React components.
│   │   ├── App.module.css    # CSS styles for the App component.
│   │   ├── App.tsx           # Main app component.
│   │   ├── AppBar            # Component for the app's top bar.
│   │   │   ├── AppBar.module.css
│   │   │   └── AppBar.tsx
│   │   ├── BackLink          # Component to create a back link to the previous page.
│   │   │   ├── BackLink.module.css
│   │   │   └── BackLink.tsx
│   │   ├── LoadingCard       # Component for displaying a loading card.
│   │   │   └── LoadingCard.tsx
│   │   ├── PersonsList       # Component for displaying the list of characters.
│   │   │   ├── PersonsList.module.css
│   │   │   └── PersonsList.tsx
│   │   └── SearchBox         # Component for searching characters.
│   │       ├── SearchBox.module.css
│   │       └── SearchBox.tsx
│   ├── constants.ts          # General constants for the project.
│   ├── context               # Folder for React contexts (for global state management).
│   │   ├── ErrorContext.tsx  # Context for error handling.
│   │   └── PageContext.tsx   # Context for managing pages.
│   ├── index.css             # Main CSS file for global styles.
│   ├── main.tsx              # Entry point for React application.
│   ├── pages                 # Folder for different pages of the app.
│   │   ├── Home              # Home page component.
│   │   │   ├── Home.module.css
│   │   │   └── Home.tsx
│   │   ├── NotFound          # 404 error page.
│   │   │   ├── NotFound.module.css
│   │   │   └── NotFound.tsx
│   │   ├── People.tsx        # Page displaying the list of people (characters).
│   │   └── PersonDetails     # Page with detailed information about a person.
│   │       ├── CustomNode.module.css
│   │       ├── CustomNode.tsx
│   │       ├── PersonDetails.module.css
│   │       └── PersonDetails.tsx
│   ├── setupTests.ts         # Setup for testing environment.
│   ├── vite-env.d.ts         # Type definitions for Vite.
│   └── __tests__             # Folder for tests.
│       ├── components        # Component tests.
│       │   ├── App.test.tsx
│       │   ├── AppBar.test.tsx
│       │   ├── PersonsList.test.tsx
│       │   └── SearchBox.test.tsx
│       ├── mockData          # Folder for mock data used in tests.
│       │   └── mockPersons.ts
│       └── pages             # Tests for pages.
│           ├── People.test.tsx
│           └── PersonDetails.test.tsx
├── tsconfig.app.json         # TypeScript configuration for the app.
├── tsconfig.json             # Main TypeScript configuration for the project.
├── tsconfig.node.json        # TypeScript configuration for Node.js.
├── vercel.json               # Configuration for deployment to Vercel platform.
└── vite.config.ts            # Vite configuration for building and serving the app.
```

## Contributing

I welcome contributions to this project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---
