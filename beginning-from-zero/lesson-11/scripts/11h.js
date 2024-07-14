console.log('``````````````````````````````````````````````````````');


let normalArray = [1,2, 3, 4, 5];
let newArray = [];
for ( let i = 0; i < normalArray.length; i++ ) {

    newArray.push(normalArray[i] += 1);
}

console.log(newArray);

console.log('------------------------------------------------');


function addOne( array ) {
    let result = [];

    for ( let i = 0; i < array.length; i++) {
        result.push(array[i] += 1);
    }

    console.log(result);
}

addOne([1,2,3,4]);
addOne([-1, 0, 99]);

