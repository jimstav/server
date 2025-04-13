import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginController';
import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
