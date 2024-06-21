import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { FibService } from './app/services/FibService';
import * as functions from 'firebase-functions';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const router = express.Router();

router.get(
  '/',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
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
      return;
    }
  }
);

app.use(router);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).json({ status: 404, message: 'Not Found' });
  }
);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
);

exports.fib = functions.region('asia-northeast1').https.onRequest(app);
