const { Calculadora } = require('./calculadora.js');

const operacao = new Calculadora(6, 2);

describe('Funcoes da calculadora', () => {

  it('Funcionalidade soma', () => {
    expect(operacao.sum()).toBe(8);
  });

  it('Funcionalidade subtracao', () => {
    expect(operacao.sub()).toBe(4);
  });

  it('Funcionalidade soma', () => {
    expect(operacao.mult()).toBe(12);
  });

  it('Funcionalidade soma', () => {
    expect(operacao.div()).toBe(3);
  });

});