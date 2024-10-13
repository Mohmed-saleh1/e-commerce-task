# **E-Commerce API with NestJS**

This project is a backend API built using [NestJS](https://nestjs.com/) that supports authentication, authorization, and CRUD operations for Users, Products, Vendors, and Carts. It is integrated with MongoDB as the database and uses JWT for secure access.

## **Table of Contents**

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Available Endpoints](#available-endpoints)
- [Authentication & Authorization](#authentication--authorization)
- [API Documentation](#api-documentation)

## **Features**

- **User Authentication**: Users can register and log in using JWT tokens.
- **Role-based Authorization**: Vendors can create and manage products; users can add items to carts.
- **CRUD Operations**: Full CRUD capabilities for Users, Products, Vendors, and Carts.
- **MongoDB Integration**: Uses MongoDB as the database with Mongoose ORM for schema-based interaction.
- **Modular Structure**: Organized in modules for scalability and maintainability.

## **Technologies**

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Passport](http://www.passportjs.org/) for authentication
- [JWT (JSON Web Tokens)](https://jwt.io/) for authorization
- [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing

## **Getting Started**

To run the project locally, you need to have Node.js, MongoDB, and npm (or yarn) installed on your machine.

### **Prerequisites**

- Node.js (v14 or higher)
- MongoDB (running locally or via cloud)
- npm or yarn

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/Mohmed-saleh1/e-commerce-task.git
cd nestjs-ecommerce-api
```

2. Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## **Environment Variables**

Create a `.env` file in the root directory with the following content:

```
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/ecommerce

# JWT Secret Key
JWT_SECRET=your_jwt_secret

# JWT Token Expiration
JWT_EXPIRATION=3600s
```

## **Running the Application**

You can run the application in development mode by using the following command:

```bash
npm run start:dev
```

or

```bash
yarn start:dev
```

This will start the NestJS server on the default port (http://localhost:3000).

## **Available Endpoints**

Here are some of the key endpoints available in the application.

### **Auth Endpoints**

- **POST** `/auth/login`: Authenticate and receive a JWT token.

### **Users Endpoints**

- **POST** `/users`: Create a new user.
- **GET** `/users`: Get a list of all users.
- **GET** `/users/:id`: Get details of a specific user by ID.
- **PATCH** `/users/:id`: Update a user's details.
- **DELETE** `/users/:id`: Delete a user.

### **Products Endpoints**

- **POST** `/products`: Create a new product (Vendor only).
- **GET** `/products`: Get a list of all products.
- **GET** `/products/:id`: Get details of a specific product.
- **PATCH** `/products/:id`: Update product details (Vendor only).
- **DELETE** `/products/:id`: Delete a product (Vendor only).

### **Vendors Endpoints**

- **POST** `/vendors`: Register a new vendor.
- **GET** `/vendors`: Get a list of all vendors.
- **GET** `/vendors/:id`: Get details of a specific vendor.
- **PATCH** `/vendors/:id`: Update vendor details.
- **DELETE** `/vendors/:id`: Delete a vendor.

### **Carts Endpoints**

- **POST** `/carts`: Create a new cart.
- **GET** `/carts`: Get a list of all carts.
- **GET** `/carts/:id`: Get details of a specific cart.
- **PATCH** `/carts/:id`: Update a cart.
- **DELETE** `/carts/:id`: Delete a cart.

## **Authentication & Authorization**

The application uses **JWT (JSON Web Token)** for securing routes. Here's a quick guide to how it works:

1. **Login**: Use the `/auth/login` endpoint to get a JWT token. The user must provide an email and password.
2. **Authorization**: The token must be included in the `Authorization` header as a Bearer token for all subsequent requests to protected routes (e.g., creating a product).

Example:

```
Authorization: Bearer your_jwt_token
```

### **Roles**

- `vendor`: Vendors have permission to create, update, and delete products.
- `user`: Regular users can browse and interact with products and manage their own carts.

## **API Documentation**

You can generate and access the API documentation (Swagger) by navigating to:

```
http://localhost:3000/api
```
