const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');// Teste se productDetails é uma função.
    const products = productDetails('alcool', 'máscara');
    expect(Array.isArray(products)).toBe(true);// Teste se o retorno da função é um array.
    expect(products.length).toBe(2);// Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof products[0] && typeof products[1]).toEqual('object');// Teste se os dois itens dentro do array retornado pela função são objetos.
    const objects = [{ name: 'alcool', details: { productId: 'alcool123' }}, { name: 'máscara', details: { productId: 'máscara123' }}]// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(products).toEqual(objects);
    expect(products[0].details.productId.slice(-3)).toBe('123');
    expect(products[1].details.productId.slice(-3)).toBe('123');
  });
});
