# NestJS Backend Template

This is a template repository for building robust and scalable backend applications using NestJS, a progressive Node.js framework. Whether you are starting a new project or looking to improve an existing one, this template provides a solid foundation with best practices in mind.

## Features

- **Modular Architecture**: Organize your code into modules to achieve better maintainability and scalability.
- **Dependency Injection**: Leverage NestJS's powerful dependency injection system for cleaner and more testable code.
- **Middleware**: Implement middleware for handling cross-cutting concerns like logging, authentication, and error handling.
- **Database Integration**: Easily connect to various databases using NestJS's built-in modules or integrate your preferred database system.
- **Authentication**: Implement user authentication using JWT (JSON Web Tokens) or any other authentication strategy of your choice.
- **Testing**: Includes configurations for unit testing and end-to-end testing using Jest.
- **Environment Configuration**: Use environment variables for configuration, making your application more configurable and secure.
- **Logging**: Configure logging to keep track of application events and errors.
- **Dockerization**: Dockerize your application for easier deployment and container orchestration.
- **API Documentation**: Generate API documentation using tools like Swagger or OpenAPI.
- **Validation**: Implement request validation using NestJS validation pipes.
- **Linting and Formatting**: Enforce coding standards and keep your codebase clean using ESLint and Prettier.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jknvlvxs/nestjs-template.git
   ```

2. Install dependencies:

   ```bash
   cd nestjs-template
   npm install
   ```

3. Set up your environment variables:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration.

4. Run the application:

   ```bash
   docker-compose up
   ```

   Your NestJS application should now be running locally.

## Project Structure

```
src/
|-- example/
    |-- example.controller.ts
    |-- example.module.ts
    |-- example.service.ts
|-- shared/
|   |-- middleware/
|   |-- filters/
|   |-- decorators/
|-- main.ts
|-- app.module.ts
|-- .env.example
|-- Dockerfile
|-- nest-cli.json
|-- tsconfig.json
|-- .eslintrc.js
|-- .prettierrc
|-- jest.config.js
|-- README.md
```

- **src**: Contains feature-specific modules with controllers, services, and related files.
  -- **shared**: Houses shared code, middleware, filters, and decorators.
  -- **main.ts**: Entry point of the application.
- **app.module.ts**: Main module where modules are imported and configured.
- **.env.example**: Example environment file to be copied for local configuration.
- **Dockerfile**: Docker configuration for containerization.
- **nest-cli.json**: NestJS CLI configuration.
- **tsconfig.json**: TypeScript configuration.
- **.eslintrc.js**: ESLint configuration for linting.
- **.prettierrc**: Prettier configuration.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
