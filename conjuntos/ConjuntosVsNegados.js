const texto = '123 testando!'

console.log(texto.match(/[\d\s]/g))  // inclui -> digitos OU espaços
console.log(texto.match(/[^\d\s]/g)) // inclui -> !digitos OU !espaços