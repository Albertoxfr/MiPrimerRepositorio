const factorial = numero => {
    let total = 1
    for (i=1; i<=numero; i++) {
        total = total * i;
    }
    return console.log(total);
}
factorial(10)