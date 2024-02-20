import { compactNumber } from './compactNumber';

describe('compactNumber', () => {
  it('Возвращает "0"для 0 или -0', () => {
    expect(compactNumber(0)).toBe('0');
    expect(compactNumber(-0)).toBe('0');
  });

  it('Не сокращает положительное число < 1000', () => {
    expect(compactNumber(100)).toBe('100');
    expect(compactNumber(999)).toBe('999');
  });
  it('Не сокращает отрицательное число > -1000', () => {
    expect(compactNumber(-100)).toBe('-100');
    expect(compactNumber(-999)).toBe('-999');
  });

  it('Сокращает положительное число и добавляет "k", если оно >= 1000 и < 1_000_000', () => {
    expect(compactNumber(1000)).toBe('1k');
    expect(compactNumber(5000)).toBe('5k');
    expect(compactNumber(900000)).toBe('900k');
  });
  it('Сокращает отрицательное число и добавляет "k", если оно <= 1000 и > 1_000_000', () => {
    expect(compactNumber(-1000)).toBe('-1k');
    expect(compactNumber(-5000)).toBe('-5k');
    expect(compactNumber(-900000)).toBe('-900k');
  });

  it('Сокращает положительное число и добавляет "m", если оно >= 1_000_000 и < 1_000_000_000', () => {
    expect(compactNumber(1000000)).toBe('1m');
    expect(compactNumber(5000000)).toBe('5m');
    expect(compactNumber(900000000)).toBe('900m');
  });
  it('Сокращает отрицательное число и добавляет "m", если оно <= 1_000_000 и > 1_000_000_000', () => {
    expect(compactNumber(-1000000)).toBe('-1m');
    expect(compactNumber(-5000000)).toBe('-5m');
    expect(compactNumber(-900000000)).toBe('-900m');
  });

  it('Сокращает положительное число и добавляет "b", если оно >= 1_000_000_000 и < 1_000_000_000_000', () => {
    expect(compactNumber(1000000000)).toBe('1b');
    expect(compactNumber(5000000000)).toBe('5b');
    expect(compactNumber(900000000000)).toBe('900b');
  });
  it('Сокращает отрицательное число и добавляет "b", если оно <= 1_000_000_000 и > 1_000_000_000_000', () => {
    expect(compactNumber(-1000000000)).toBe('-1b');
    expect(compactNumber(-5000000000)).toBe('-5b');
    expect(compactNumber(-900000000000)).toBe('-900b');
  });

  it('Округляет числа до 1000/-1000 до целого', () => {
    expect(compactNumber(0.99)).toBe('1');
    expect(compactNumber(-0.99)).toBe('-1');
    expect(compactNumber(999.01)).toBe('999');
    expect(compactNumber(-999.01)).toBe('-999');
  });
  it('Округляет числа от 1000/-1000 до десятых', () => {
    expect(compactNumber(1001)).toBe('1k');
    expect(compactNumber(-1001)).toBe('-1k');
    expect(compactNumber(1491)).toBe('1.5k');
    expect(compactNumber(-1491)).toBe('-1.5k');
    expect(compactNumber(200500)).toBe('201k');
    expect(compactNumber(-200500)).toBe('-201k');
    expect(compactNumber(14000000)).toBe('14m');
    expect(compactNumber(-14000000)).toBe('-14m');
    expect(compactNumber(14460000)).toBe('14m');
    expect(compactNumber(-14460000)).toBe('-14m');
  });
});
