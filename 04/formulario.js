let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

console.log(identificador.padStart(6,"0"));

let nomeFormatado = nome
    .toLocaleLowerCase()
    .split(" ")
    .map((parte) => parte[0].toLocaleUpperCase () + parte.slice (1))
    .join (" ");

console.log(nomeFormatado);

let emailNospace = email.trim();

console.log(`[${emailNospace}]`);
