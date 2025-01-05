# Express TypeScript Backend Template

## Overview

This is a boilerplate template for building backend applications with **Express** and **TypeScript**. It provides a clean and scalable structure to kickstart your backend projects without having to set up repetitive configurations every time.

### Why This Template?

After creating numerous backend services, the need for a reusable, pre-configured template became apparent. This repository allows you to focus on building features instead of setting up boilerplate code and configurations repeatedly. It's designed to save time and streamline the development process.

---

## Features

- **TypeScript Integration**: Write clean, type-safe code with TypeScript.
- **Modular Structure**: Well-organized folder structure for scalability.
- **Pre-configured Scripts**: Quick start, development, and build commands.
- **Express Framework**: Minimalistic and fast web framework.
- **Nodemon for Development**: Automatic server reloads during development.
- **TypeScript Compiler**: Transpile TypeScript to JavaScript seamlessly.

---

## Folder Structure

### Root Directory

```sh
express_typescript_backend/
├── dist/           # Compiled JavaScript files (auto-generated)
├── node_modules/   # Dependencies
├── src/            # Source files
├── package.json    # Project metadata and dependencies
├── tsconfig.json   # TypeScript configuration
├── README.md       # Project documentation
```

### Inside `src/`

```sh
src/
├── config/         # Application configuration files
├── controllers/    # Route handlers for business logic
├── routes/         # Express routes
├── services/       # Reusable service functions
├── index.ts        # Main entry point for the application
```

#### Explanation of Key Files and Folders:

- **`config/`**: Store environment variables, constants, and other configuration-related files.
- **`controllers/`**: Define the core business logic for your routes here.
- **`routes/`**: Specify API endpoints and link them to controllers.
- **`services/`**: Create utility or service functions for database interactions, third-party API calls, etc.
- **`index.ts`**: Entry point to start the Express application.

---

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **TypeScript** globally installed (optional)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/HarisShariff/express_typescript_backend.git
   cd express_typescript_backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   `sh
npm run dev
`
   The server will run on http://localhost:3000 by default

## Build and Run for Production

1. Compile TypeScript to JavaScript:
   ```sh
   npm run build
   ```
2. Start the compiled application:
   ```sh
   npm run start
   ```

## Usage

1. Create a New Service:

- Clone this repository.
- Rename the project folder and update the metadata in package.json.
- Start building your backend with the modular structure.

2. Customizing:

- Add new routes in the routes/ folder and link them to appropriate controllers.
- Write service logic in the services/ folder to keep code modular and reusable.

## Tech Stack

- Express: Fast and unopinionated web framework.
- TypeScript: Typed JavaScript for improved developer experience.
- Nodemon: Auto-reloading during development.
- ts-node: Run TypeScript files directly in development.

## Contributions

Contributions are welcome! If you have ideas for improvements or encounter issues, feel free to open an issue or submit a pull request.
