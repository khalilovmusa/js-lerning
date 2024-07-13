console.log('``````````````````````````````````````````````````````');


let normalArray = [1,2, 3, 4, 5];
let newArray = [];
for ( let i = 0; i < normalArray.length; i++ ) {

    newArray.push(normalArray[i] += 1);
}

console.log(newArray);