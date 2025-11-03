import express, { Application } from 'express';
import cors from 'cors';
import { logger } from './middlewares/logger';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import routes from './routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
