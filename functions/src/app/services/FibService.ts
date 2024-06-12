import { fib } from '../controller/fibController';

//インターフェース
export interface Fib {
  result: number;
}

//クラス
export class FibService {
  public async fib(n: number): Promise<Fib> {
    return {
      result: fib(n),
    };
  }
}
