import express, { Application } from 'express';
import cors from 'cors';
import { logger } from './middlewares/logger';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler';
import routes from './routes';
import authRoutes from './auth/auth.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

app.get('/', (req, res) => {
  res.json({
    message: 'PKBM API Server',
    version: '1.0.0',
    status: 'running',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
