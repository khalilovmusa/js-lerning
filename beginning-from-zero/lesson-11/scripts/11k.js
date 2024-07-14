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

console.log('``````````````````````````````````````````````````');


function countPositiveWhile ( array ) {
    let i = 0;
    let count = 0;

    while ( i < array.length ) {
        if ( array[i] >= 0 ) {
            count++;
        }
        i++
    }
    return count;
}

console.log(countPositive([1, 2, 3, 4, 5, -10, 2, -3]));