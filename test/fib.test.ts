import { fib } from '../functions/src/app/controller/fibController';

describe('fib', () => {
  it('should return 0 for n=0', () => {
    expect(fib(0)).toBe(0);
  });

  it('should return 1 for n=1', () => {
    expect(fib(1)).toBe(1);
  });

  it('should return 1 for n=2', () => {
    expect(fib(2)).toBe(1);
  });

  it('should return 2 for n=3', () => {
    expect(fib(3)).toBe(2);
  });

  it('should return 3 for n=4', () => {
    expect(fib(4)).toBe(3);
  });

  it('should return 5 for n=5', () => {
    expect(fib(5)).toBe(5);
  });

  it('should return 8 for n=6', () => {
    expect(fib(6)).toBe(8);
  });

  it('should return 13 for n=7', () => {
    expect(fib(7)).toBe(13);
  });

  // 境界値やその他のケースを追加
  it('should handle larger values', () => {
    expect(fib(10)).toBe(55);
    expect(fib(15)).toBe(610);
    expect(fib(20)).toBe(6765);
  });
});
