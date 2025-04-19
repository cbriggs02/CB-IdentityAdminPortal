# CB-IdentityAdminPortal

A secure and modular Angular application designed for managing identity, users, and roles. This admin portal communicates with the IdentityServiceApi (ASP.NET Core Web API) for managing user authentication and role-based access control. Built using modern front-end practices, this portal is scalable, maintainable, and integrates well with DevOps workflows.

## Overview

The CB-IdentityAdminPortal is a web-based application that allows administrators to manage user identities, roles, and permissions. It communicates with a secure ASP.NET Core Web API backend for performing operations such as login, user management, and role assignment.
This portal is built with Angular, leveraging Node.js, Yarn, and modern front-end technologies. The app ensures a modular design and a smooth user experience.

## Clients / Consumers

This front-end application consumes the following API:
- [IdentityServiceApi (ASP.NET Web API)](https://github.com/cbriggs02/CB-IdentityService)

## System Design

- **Modular Architecture**: The application is broken down into the following layers:
  - **Components**: Represent UI views for managing users, roles, and authentication.
  - **Services**: Handle business logic and communication with the backend API.
  - **Models**: Define the structure of requests and responses.
- **Angular**: Utilizes Angular's powerful tools like reactive forms, HTTP client, routing, and state management for building dynamic single-page applications.
- **State Management**: Utilizes services to manage user sessions, authentication tokens, and user roles across the app.
- **API Integration**: Secure communication with the **IdentityServiceApi** backend via HTTP, using Angular's HTTP client to make API calls.

## Dependencies

- **Angular**: Main framework for the front-end application.
- **Node.js**: Used for running development scripts, building, and serving the Angular app.
- **Yarn**: Used for package management.
- **Angular** CLI: Used for building, testing, and serving the application.

---

##  Author

Christian Briglio – 2025
