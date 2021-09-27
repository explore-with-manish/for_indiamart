import path from 'path';
import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';

const app = express();

app.use(morgan('dev'));

app.use('/', indexRouter);

app.use(
    express.static(path.resolve('build'))
)

export default app;