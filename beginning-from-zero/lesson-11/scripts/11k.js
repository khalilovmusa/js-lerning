console.log('``````````````````````````````````````````````````');

function countPositive ( array ) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if ( array[i] >= 0 ) {
            count ++;
        }
    }
    return count;
}

console.log(countPositive([-1, 2, 3, -5, 6, 7, 9, -99]));

