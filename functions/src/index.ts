import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { FibService } from './app/services/FibService';
const functions = require('firebase-functions');
export const regionFunctions = functions.region('asia-northeast1');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
const router = express.Router();

router.get('/:n', async (req, res, next) => {
  const service = new FibService();
  const n = Number(req.params.n);
  if (!Number.isInteger(n) || n < 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }
  try {
    const result = await service.fib(n);
    return res.status(200).json({ result });
  } catch (error) {
    next(error);
    return;
  }
});

app.use(router);

// 404エラーハンドリング
app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: 'Not Found' });
});

app.use((req, res, next) => {
  res.status(500).json({ status: 500, message: 'Internal Server Error' });
});

exports.fib = functions.https.onRequest(app);
