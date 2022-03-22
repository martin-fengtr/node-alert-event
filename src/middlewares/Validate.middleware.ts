import { NextFunction, Request, Response } from 'express';
import { SchemaOf } from 'yup';

export default (schema: SchemaOf<any>) => async (req: Request, res: Response, next: NextFunction) => {
  const resource = req.body;
  try {
    await schema.validate(resource);
    next();
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.errors.join(', ') });
  }
};
