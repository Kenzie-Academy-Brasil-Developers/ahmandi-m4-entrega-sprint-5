import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import userRoutes from './routes/user.routes';
import propertyRoutes from './routes/properties.routes';
import categoryRoutes from './routes/categories.routes';
import scheduleRoutes from './routes/schedules.routes';
import handleErrors from './middlewares/handleErrors.middleware';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(propertyRoutes);
app.use(categoryRoutes);
app.use(scheduleRoutes);

app.use(handleErrors);

export default app;
