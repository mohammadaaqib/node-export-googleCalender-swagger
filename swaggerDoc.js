const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Hello World', // Title (required)
            version: '1.0.0', // Version (required)
        },
    },
    // Path to the API docs
    apis: ['./src/routes/router.js'],
};
const spec = swaggerJSDoc(options);
module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}