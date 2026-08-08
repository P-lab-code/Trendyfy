# 🛍️ Trendyfy — Full-Stack E-Commerce Platform

A modern **full-stack e-commerce web application** built with **React.js, Spring Boot, PostgreSQL, JWT Authentication, and Python Flask**.

Trendyfy provides a complete online shopping experience with user authentication, product browsing, categories, search and filtering, cart and wishlist management, checkout, orders, payment integration, and a dedicated admin panel for managing products and users.

---

## 🌐 Project Overview

**Trendyfy** is designed as a complete e-commerce platform with separate frontend, backend, and ML-powered image search services.

### 👤 Customer Features

* User Registration & Login
* JWT-based authentication
* Secure user sessions
* Browse products by category
* Product search
* Product filtering
* Product sorting
* Product pagination
* Product details
* Add products to cart
* Update cart quantity
* Remove products from cart
* Wishlist management
* Checkout
* Order placement
* Order success page
* Responsive shopping interface

### 👨‍💼 Admin Features

Trendyfy includes a dedicated **Admin Panel** for managing the e-commerce platform.

Admin can:

* Access the Admin Dashboard
* View dashboard statistics
* Add new products
* Update products
* Delete products
* Manage product categories
* Manage users
* Manage orders
* View and control product inventory
* Manage products through a dedicated admin interface

The application automatically creates a default admin account through the backend `AdminSeeder` configuration when an admin user does not already exist.

---

## 🔐 Authentication & Authorization

Trendyfy uses **Spring Security and JWT (JSON Web Token)** for authentication and authorization.

### Security Features

* User Registration
* User Login
* Password encryption
* JWT token generation
* JWT request filtering
* Role-Based Access Control
* Protected user routes
* Protected admin routes
* Separate Admin and User functionality

### Default Admin Account

For local development, the project contains an admin seeder that creates the following account if an admin user does not already exist:

```text
Username: admin
Email: admin@gmail.com
Password: admin123
Role: ADMIN
```

> ⚠️ Change the default admin credentials before using the application in a production environment.

---

# 🛠️ Tech Stack

## 🔙 Backend

* Java 17
* Spring Boot 3.4.5
* Spring Web
* Spring Security
* Spring Data JPA
* Hibernate
* PostgreSQL
* JWT Authentication
* RESTful APIs
* Maven
* Bean Validation
* Stripe Java SDK
* Docker

## 🔜 Frontend

* React.js 19
* React Router
* Axios
* Tailwind CSS
* React Icons
* HTML5
* CSS3
* JavaScript

## 🤖 Image Search / ML Backend

Trendyfy also contains a separate Python-based image search service.

* Python
* Flask
* Flask-CORS
* PyTorch
* FAISS
* NumPy
* Pillow
* Image Embeddings

The ML service provides an **image-based product search** endpoint that processes an uploaded image and searches the product image index to return the closest matching product.

## 🗄️ Database

* PostgreSQL

Main application entities include:

* Users
* Categories
* Products
* Cart Items
* Orders
* Order Items
* Wishlist

---

# ✨ Key Features

## 🛒 Shopping

* Product listing
* Product details
* Category-based browsing
* Sub-category support
* Brand information
* Product search
* Search filtering
* Sorting
* Pagination
* Product quantity management

## 🛍️ Cart

* Add to cart
* Increase/decrease quantity
* Remove products
* Cart popup
* Order summary

## ❤️ Wishlist

* Add product to wishlist
* View wishlist
* Remove product from wishlist

## 📦 Orders

* Checkout
* Order placement
* Order details
* Order success page
* Order management through Admin Panel

## 💳 Payments

The backend includes **Stripe payment integration** through dedicated payment controllers and services.

Stripe can be configured according to the deployment environment.

## 👨‍💼 Admin Dashboard

The Admin Panel provides separate interfaces for:

* Dashboard
* Product Management
* User Management
* Order Management
* Category Management

Admins can manage products directly from the application instead of modifying the database manually.

---

# 🤖 AI-Powered Image Search

One of the additional features of Trendyfy is **image-based product search**.

Users can upload an image and the ML backend processes the image using a pre-trained model and FAISS vector search.

### Image Search Flow

```text
User uploads image
        ↓
React Frontend
        ↓
Python Flask ML Backend
        ↓
Image preprocessing
        ↓
Feature / Image Embedding
        ↓
FAISS Similarity Search
        ↓
Matching Product ID
        ↓
Product Result
```

The image search service runs on:

```text
http://localhost:5000
```

---

# 📂 Project Structure

```text
Trendyfy/
│
├── backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/herin/ecommerce/
│   │   │   │       ├── config/
│   │   │   │       ├── controller/
│   │   │   │       ├── dto/
│   │   │   │       ├── exception/
│   │   │   │       ├── mapper/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── data.sql
│   │   │
│   │   ├── test/
│   │   ├── pom.xml
│   │   ├── Dockerfile
│   │   └── mvnw
│   │
│   ├── frontend/
│   │
│   ├── ml_backend/
│   │   ├── app.py
│   │   ├── model.py
│   │   ├── search.py
│   │   ├── upload.py
│   │   ├── bulid_index.py
│   │   ├── requirement.txt
│   │   └── static/
│   │
│   ├── docker-compose.yml
│   └── README.md
```

---

# 🗃️ Database & Seed Data

The project uses **PostgreSQL** with Spring Data JPA and Hibernate.

The `data.sql` file contains initial seed data for the application.

### Predefined Categories

* Men
* Women
* Electronics
* Beauty
* Home & Kitchen
* Sports
* Books
* Toys
* Groceries
* Furniture

### Product Data

The seed file also contains products with information such as:

* Product name
* Description
* Price
* Quantity
* Category
* Sub-category
* Brand
* Product image

This allows the application to display sample products immediately after database initialization.

---

# ⚡ Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/P-lab-code/Trendyfy.git
cd Trendyfy
```

---

# ☕ Backend Setup

## Prerequisites

Make sure the following are installed:

* Java 17+
* Maven
* PostgreSQL
* Git

### Create PostgreSQL Database

Create a PostgreSQL database named:

```text
ecommerce
```

Then configure your database credentials in:

```text
backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

The application runs on:

```text
http://localhost:8082
```

## Run Backend

```bash
cd backend
mvn spring-boot:run
```

Or on Windows:

```bash
mvnw.cmd spring-boot:run
```

---

# ⚛️ Frontend Setup

## Prerequisites

* Node.js
* npm

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Frontend:

```text
http://localhost:3000
```

---

# 🤖 ML Backend Setup

Navigate to:

```bash
cd ml_backend
```

Install Python dependencies:

```bash
pip install -r requirement.txt
```

Run the Flask server:

```bash
python app.py
```

ML backend:

```text
http://localhost:5000
```

The image search API is available under:

```text
/api/v1/search-image
```

---

# 🐳 Docker

The project includes Docker configuration for running the application stack.

Build and start the services:

```bash
docker compose up --build
```

The Docker Compose configuration includes:

* Spring Boot Backend
* React Frontend
* PostgreSQL Database

---

# 🔄 CI/CD

The repository contains GitHub Actions workflows for:

```text
.github/
└── workflows/
    ├── backend.yml
    └── frontend.yml
```

These workflows can be used to automate build and CI processes for the backend and frontend.

---

# 🧪 Testing

### Backend

```bash
cd backend
mvn test
```

### Frontend

```bash
cd frontend
npm test
```

---

# 🔌 Backend API Modules

The Spring Boot backend is organized into REST controllers for different application modules:

```text
Authentication
Products
Categories
Cart
Orders
Wishlist
Admin
Payments
```

The backend follows a layered architecture using:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

DTOs and mappers are used to structure API requests and responses.

---

# 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │    React Frontend   │
                    │     Port: 3000      │
                    └──────────┬──────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Spring Boot API   │
                    │     Port: 8082      │
                    └──────────┬──────────┘
                               │
                    Spring Data JPA
                               │
                               ▼
                    ┌─────────────────────┐
                    │     PostgreSQL      │
                    │     Port: 5432      │
                    └─────────────────────┘

                               │
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Python ML Backend   │
                    │     Port: 5000      │
                    │ Flask + FAISS       │
                    └─────────────────────┘
```

---

# 🔒 Security Note

Never commit sensitive credentials such as:

* Database passwords
* JWT secrets
* Stripe secret keys
* API keys
* Production credentials

Use environment variables or a secure secrets manager for production deployments.

---

# 🚀 Future Improvements

Possible future improvements include:

* Product reviews and ratings
* Advanced recommendation system
* Improved AI product recommendations
* Email notifications
* Advanced analytics
* Production cloud deployment
* Improved payment configuration
* More automated test coverage

---

# 👩‍💻 Developer

### Pooja Tiwari

Java Full Stack Developer | MCA

📍 Nagpur, Maharashtra

🔗 **GitHub:** https://github.com/P-lab-code

---

## ⭐ Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Trendyfy — Shop Smart. Shop Trendy. 🛍️**
