console.log('----------------------------------------------------');

let result = [];

function addNum (arr, num) {

    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i] += num);
    }
    console.log(result);
}

addNum([1,2,3] , 4);

let secondResult = [];

function addNumWhile ( arr,num ) {
    let i = 0;
    while ( i < arr.length ) {
        secondResult.push(arr[i] += num);
        i++;
    }

    console.log(secondResult);
    
}

addNumWhile([2,3,4,5] , 7);