"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fib = void 0;
function fib(n) {
    if (n <= 0)
        return 0;
    if (n === 1)
        return 1;
    let current = 1;
    let next = 1;
    for (let i = 2; i < n; i++) {
        const tmp = current + next;
        current = next;
        next = tmp;
    }
    return next;
}
exports.fib = fib;
//# sourceMappingURL=fibController.js.map