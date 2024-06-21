import { fib } from '../controller/fibController';

//インターフェース
export interface Fib {
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
