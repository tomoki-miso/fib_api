//インターフェース
interface Fib {
  result: number;
}

//クラス
export class FibService {
  public fib(n: number): Fib {
    return {
      result: fib(n),
    };
  }
}

export function fib(n: number): number {
  if (n === 1) return 1;

  let current = 1;
  let next = 1;

  for (let i = 2; i < n; i++) {
    const tmp = current + next;
    current = next;
    next = tmp;
  }

  return next;
}
