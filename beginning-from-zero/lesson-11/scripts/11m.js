console.log('----------------------------------------------------------------');

function minMax ( nums ) {
    let resultObj = { min: null, max: null};
    
    for ( let i =0; i < nums.length; i++ ) {

        if ( resultObj.min === null || nums[i] < resultObj.min ) {
            resultObj.min = nums[i];
        }

        if ( resultObj.max === null || nums[i] > resultObj.max ){
            resultObj.max = nums[i];

        }

        if ( nums.length === 1 ) {
            resultObj.max = nums[i];
            resultObj.min = nums[i];
        }

    }
    return resultObj;
}

// let obj = { num: 0};
// console.log(obj.num);
// obj.num = null;
// console.log(obj.num);
console.log([].length);
console.log(minMax([]));
console.log(minMax([1,3]));
 console.log(minMax([3]));
console.log(minMax([1, -2, 3, 5, 99, -20]));