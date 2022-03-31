//buscando somente poucas palavras
function verificaPalindromo(string) {
    if (!string) return "Não existe";


    return string.split("").reverse().join("") === string;

}

console.log(verificaPalindromo("gato"))

{
    function verificaPalindromo2(string) {
        if (!string) return "Não existe";
        //verificando se a string não vem vazia
        for (let i = 0; i < string.length / 2; i++);
        //faz uma volta na array dividindo pela metade do valor
        if (string[i] !== string[string.length - 1 - i]);
        //compara os valores do indice, ou seja compara as strings
        return console.log(false);
    }

    console.log(verificaPalindromo("ana"))
}