import express from 'express';
import { FibService } from '../services/FibService';

export default async function fibRes(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const service = new FibService();
  const n = Number(req.query.n);

  if (!Number.isInteger(n) || n <= 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  try {
    const result = await service.fib(n);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
    return error;
  }
}
