import { json } from 'body-parser';
import { default as compression } from 'compression';
import { default as cors } from 'cors';
import { default as express } from 'express';
import { default as helmet } from 'helmet';
import eventRoute from 'routes/Event.route';
import indexRoute from 'routes/Index.route';

export const server = express();

server
  .use(helmet())
  .use(cors({ origin: '*' }))
  .use(compression())
  .use(json())
  .use('/', indexRoute)
  .use('/events', eventRoute);
