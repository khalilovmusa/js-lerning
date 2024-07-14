console.log('``````````````````````````````````````````````````');



function addArrays ( arr1, arr2 ) {
    let arrSum = [];

    for (let i = 0; i < arr1.length; i++) {
        arrSum.push(arr1[i] + arr2[i]);
    }
    return arrSum;
}

console.log(addArrays([1,2,3], [1,2,3]));
console.log(addArrays([1,2,3], [4,5,6]));

function addArraysWhile ( arr1, arr2 ) {
    let i = 0;
    let resultSum = [];

    while ( i < arr1.length ) {
        resultSum.push(arr1[i] + arr2[i]);
        i++;
    }
    return resultSum;
}

console.log(addArraysWhile([1,2,3] , [1,2,3]));