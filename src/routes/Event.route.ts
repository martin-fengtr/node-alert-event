import express, { Request, Response } from 'express';
import validateMiddleware from 'middlewares/Validate.middleware';
import EventSchema from 'schemas/Event.schema';

const router = express.Router();

router
  .post('/test', validateMiddleware(EventSchema), (req: Request, res: Response) => {
    const { body: data } = req;
    console.log('request /test', JSON.stringify(data, null, 2));
    res.json({ success: true, data });
  })
  .post('/save', validateMiddleware(EventSchema), (req: Request, res: Response) => {
    const { body: data } = req;
    console.log('request /save', JSON.stringify(data, null, 2));
    res.json({ success: true, data });
  });

export default router;
