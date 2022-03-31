var firstName = 'Neto';
var lastName = 'Flavio';

if (firstName === 'Neto') {
    var firstName = 'Antonio';
    let lastName = 'Andrade'
}
console.log(firstName, lastName);
/* primeira aula sobre JavaScript */

{
    // const FIRST_NAME = "Antonio";
    // FIRST_NAME = "Neto";
    //não e possivel reatribuir o valor de uma constante ela e imutavel
} {
    // const FIRST_NAME = "Neto";
    // const FIRST_NAME = "Antonio";
    // também não e possivel recriar usando o mesmo nome da constante
}

// {
// const FIRST_NAME;
// FIRST_NAME = "Antonio"
// // o compilador não nos permite fazer esse tipo de ação,
// // pois se trata de uma const então precisamos declarar seu
// // valor
// 
{
    const FIRST_NAME = "Antonio";
    console.log(FIRST_NAME);
}