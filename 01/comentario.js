const comentario = "Esse anúncio parece uma benção";

const letrasMinusculas = comentario.toLowerCase();

if (letrasMinusculas.includes("golpe") || letrasMinusculas.includes("fraude"))
    {
    console.log("Comentário bloqueado por conter palavras proibidas.");
}    else{
        console.log("Comentário publicado.");
}