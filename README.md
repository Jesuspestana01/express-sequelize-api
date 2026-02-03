# Express Sequelize REST API

This is a lightweight and scalable boilerplate for building REST APIs using Node.js, Express, and Sequelize ORM.

The purpose of this template is to eliminate repetitive setup tasks for database connections and folder structures, allowing you to focus directly on building your business logic or just for practicing purpose.

## Key Features

* **ES Modules:** Configured with native import/export syntax.
* **Modular Architecture:** Routes and models are separated by responsibility.
* **Basic CRUD:** Pre-configured endpoints for the User model.
* **Environment Variables:** Secure credential management using dotenv.

## Prerequisites

* Node.js (v16 or higher recommended).
* A database instance (PostgreSQL, MySQL, or MariaDB).

## Getting Started

Follow these steps to clone the repository and start your project.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/express-sequelize-api.git
cd express-sequelize-api
```

### 2. Install the dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables
Copy the example file and fill in your connection details
```bash
cp .env.example .env
```
Open the .env file and paste your DATABASE_URL (Connection String).

### 4. Run the server
```bash
npm run dev
```

# Included Endpoints
The boilerplate comes with the following ready-to-use routes for the User model:

* **GET: /users** - Retrieves a list of all registered users.
* **POST: /users** - Creates a new user in the database.

# Project Structure

* **models/:** Sequelize schema definitions.
* **routes/:** Endpoint definitions (e.g., userRoutes.js).
* **index.js:** Database connection and Sequelize initialization.
* **routes.js:** Main Express application entry point and server configuration.

**Note:** This boilerplate currently uses sequelize.sync(). Migration support and advanced table versioning are planned for future updates.
