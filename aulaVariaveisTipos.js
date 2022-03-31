{
    let um = "kkkk";
    typeof um;
    um = 1;
    typeof um;
}
//curso de variaveis e tipo
{
    const DIO = 'Digital Innovation One';

    let firstName = 'Neto';
    let lastName = 'Flavio';

    let fullName = 'Nome completo:  ' + firstName + ' ' + lastName;
    console.log(fullName)
}
// concatenando strings
{
    let nome = 'Neto';
    let sobrenome = 'Flavio';

    let concatenado = nome.concat(sobrenome);

    console.log(concatenado);
    console.log(typeof(concatenado));
    console.log(concatenado.length);
}
//string, pois String seria um objeto, por chamarmos "new"
{
    let exemplo = new String("dsaudhausd");
    console.log(typeof(exemplo));
    console.log(exemplo.length)
}
// concatenando com espaço
{
    let nome = 'Neto';
    let sobrenome = 'Flavio';
    concatenar = nome + sobrenome;
    console.log(concatenar);
    concatenar = nome + " " + sobrenome;
    console.log(concatenar);
    // outro metodo de concatenar com espaço sem muito codigo.
    concatenar = `${nome} ${sobrenome}`
    console.log(concatenar)
}
// Usando metodos da strings
{
    let frase = 'Ola, tudo bem';
    console.log(frase.split(""));
    console.log(frase);
    console.log(frase.includes("Ola"));
    console.log(frase.startsWith("O"));
    console.log(frase.endsWith('a'));
    // o replace modifica a palavra subistituindo os caracteres qeu vc passou
    // mas ela precisa ser armazenda em outra palvra para poder ter seu valor.
    let modificada = frase.replace(",", "!")
    console.log(modificada)
}