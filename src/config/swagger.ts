import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hintro Meeting Intelligence API",
      version: "1.0.0",
      description:
        "Backend assignment for Hintro Meeting Intelligence Service",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "https://meeting-management-backend-arpit.onrender.com"
            : "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
  "./src/routes/*.ts",
  "./src/controllers/*.ts",
],
};

export const swaggerSpec =
  swaggerJsdoc(options);