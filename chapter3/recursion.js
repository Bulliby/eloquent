function isEven(number) 
{
    if (number === 0) {
        console.log('Even');
    } else if (number === 1) {
        console.log('Odd');
    } else {
        isEven(number - 2);
    }
}

isEven(-1);
