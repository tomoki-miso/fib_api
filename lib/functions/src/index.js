"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionFunctions = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const FibService_1 = require("./app/services/FibService");
const functions = require('firebase-functions');
exports.regionFunctions = functions.region('asia-northeast1');
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const router = express_1.default.Router();
router.get('/fib/:n', async (req, res, next) => {
    const service = new FibService_1.FibService();
    const n = Number(req.params.n);
    if (!Number.isInteger(n) || n < 0) {
        return res.status(400).json({ status: 400, message: 'Bad Request' });
    }
    try {
        const result = await service.fib(n);
        return res.status(200).json({ result });
    }
    catch (error) {
        next(error);
        return; // ここで関数を終了
    }
});
// ルーターをアプリケーションに適用
app.use('/', router); // ベースパスを '/' に設定
// 404エラーハンドリング
app.use((req, res, next) => {
    res.status(404).json({ status: 404, message: 'Not Found' });
});
// その他のエラーハンドリング
app.use((req, res, next) => {
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
});
// Firebase Functionsのエクスポート
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map