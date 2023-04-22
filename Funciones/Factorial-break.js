let factorial = 10;
let i = 1;
 while (i > 0) {
    factorial = factorial * i;
    i++;
    if (i > 9) {
        break;
    }
 }

 console.log(`${factorial}`)