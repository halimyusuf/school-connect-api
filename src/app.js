import express from 'express';
import path from 'path';
import createError from 'http-errors';
import routes from './routes';
import mongoInit from './loaders/mongoose';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
mongoInit.initDB();
app.use(cors());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'School connect api', // Title (required)
            version: '1.0.0', // Version (required)
            contact: {
                name: 'Halim Yusuf'
            },
            servers: ['http://localhost:4000']
        }
    },
    // Path to the API docs
    apis: [path.join(__dirname, '/routes/*.js')]
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
routes(app);
app.use((_req, _res, next) => {
    next(createError(404));
});
app.use((err, _req, res, _next) =>
    res.status(err.status || 500).json({
        error: 'error',
        message: err.message
    })
);

export default app;
