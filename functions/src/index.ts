import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as functions from 'firebase-functions';
import fibRes from './app/controller/fibController';

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
    return fibRes(req, res, next);
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
