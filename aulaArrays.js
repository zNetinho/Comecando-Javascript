{
    let array = [];
    array.push("2")
    array.push(3);
    console.log(array.length);
    //removendo o ultimo item
    array.pop(1);
    console.log(array);
    //remove o primeiro item
    console.log(array.shift())
    console.log(array);
    //iterabilidade
    array.push(2, "S")
    for (let i = 0; i < array.length; i++)
        console.log(array[i])

    console.log(array.includes("S"));
    console.log(array.every(array => 3 === 3));
    console.log(array.some(array => "S" === 2));
}