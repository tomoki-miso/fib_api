"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibService = void 0;
const fibController_1 = require("../models/fibController");
//クラス
class FibService {
    async fib(n) {
        return {
            result: (0, fibController_1.fib)(n),
        };
    }
}
exports.FibService = FibService;
//# sourceMappingURL=FibService.js.map