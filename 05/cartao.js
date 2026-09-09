const numeroCartao = '1111222233334444';
console.log(numeroCartao.length);

const numeroFormatado = `${numeroCartao.slice(0,5)}${`*`.repeat(8)}${numeroCartao.slice(-4)}`;
console.log(numeroFormatado);

