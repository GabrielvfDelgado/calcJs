const { sum, sub, mult, div } = require('./calculadora');

describe('Funcoes da calculadora', () => {

  it('Funcionalidade soma', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('Funcionalidade subtracao', () => {
    expect(sub(10, 2)).toBe(8);
  });

  it('Funcionalidade soma', () => {
    expect(mult(3, 2)).toBe(6);
  });

  it('Funcionalidade soma', () => {
    expect(div(2, 2)).toBe(1);
  });

});