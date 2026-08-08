# 🛍️ Trendyfy — Full-Stack E-Commerce Application

Trendyfy is a full-stack e-commerce web application built using **React.js, Java, Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL**.

The application provides user authentication, product browsing, categories, cart, wishlist, checkout, orders, and an admin panel for managing products and users.

---

## ✨ Features

### 👤 User Features

* User Registration
* User Login
* JWT Authentication
* Browse Products
* Product Search
* Product Filtering
* Product Categories
* Product Details
* Add to Cart
* Update Cart Quantity
* Remove from Cart
* Wishlist
* Checkout
* Order Placement
* Order Management

### 👨‍💼 Admin Features

The application includes a separate Admin Panel.

Admin can:

* Login as Admin
* Access Admin Dashboard
* View Dashboard
* Add Products
* Update Products
* Delete Products
* Manage Products
* Manage Users
* Manage Orders
* Manage Categories

---

## 🔐 Authentication & Authorization

Trendyfy uses **Spring Security and JWT** for authentication and authorization.

### Security Features

* User Registration
* User Login
* Password Encryption
* JWT Authentication
* Role-Based Authorization
* Protected User APIs
* Protected Admin APIs

A default Admin user is created through the backend seeder configuration.

> ⚠️ Change the default admin credentials before using the application in production.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Axios
* React Router
* Tailwind CSS
* HTML5
* CSS3

### Backend

* Java 17
* Spring Boot
* Spring MVC
* Spring Security
* Spring Data JPA
* Hibernate
* REST APIs
* JWT
* Maven

### Database

* PostgreSQL

### Tools

* Git
* GitHub
* IntelliJ IDEA
* Postman

---

## 🗄️ Database

The application uses **PostgreSQL** as the database.

Main entities include:

* Users
* Categories
* Products
* Cart Items
* Orders
* Order Items
* Wishlist

Initial product and category data is provided through the backend `data.sql` file.

The `data.sql` file contains product information such as:

* Product Name
* Description
* Price
* Quantity
* Category
* Sub-category
* Brand
* Product Image

---

## 🏗️ Application Architecture

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
```

---

## 📂 Project Structure

```text
Trendyfy/
│
├── backend/
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
│   │   └── mvnw
│
├── frontend/
│
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/P-lab-code/Trendyfy.git
cd Trendyfy
```

---

## ☕ Backend Setup

### Prerequisites

* Java 17+
* Maven
* PostgreSQL

### Create Database

Create a PostgreSQL database:

```text
ecommerce
```

Configure your database credentials in:

```text
backend/src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommerce
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

### Run Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8082
```

---

## ⚛️ Frontend Setup

Install dependencies:

```bash
cd frontend
npm install
```

Start the application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Axios
  ↓
Spring Boot REST APIs
  ↓
Service Layer
  ↓
Spring Data JPA / Hibernate
  ↓
PostgreSQL
```

---

## 👨‍💻 Developer

### Pooja Tiwari

Java Full Stack Developer | MCA

📍 Nagpur, Maharashtra

🔗 GitHub: https://github.com/P-lab-code

---

## ⭐ Project

If you like this project, consider giving the repository a ⭐.

**Trendyfy — Full-Stack E-Commerce Application**
