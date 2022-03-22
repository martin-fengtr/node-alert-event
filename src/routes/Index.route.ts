import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.json({ success: true, message: 'Server works!' });
});

export default router;
