console.log('----------------------------------------------------');



function minMax ( nums ) {
    let resultObj = {
        min: nums[0],
        max: nums[0]
    };


    for ( let i = 0; i < nums.length; i++ ){
        let value = nums[i];

        if( value < resultObj.min ){
            resultObj.min = value;
        }

        if( value > resultObj.max ){
            resultObj.max = value;
        }

      }
    return resultObj;
    }
   


console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));


// function minMax(nums) {
//     // We'll set the starting values of min and max
//     // as the first value in the array. (This is
//     // just one way to set the starting values. You
//     // can use another way if you like.)
//     const result = {
//       min: nums[0],
//       max: nums[0]
//     };

//     for (let i = 0; i < nums.length; i++) {
//       const value = nums[i];

//       // If the value is less than the min,
//       // update the min.
//       if (value < result.min) {
//         result.min = value;
//       }

//       // If the value is greater than the max,
//       // update the max.
//       if (value > result.max) {
//         result.max = value;
//       }
//     }

//     return result;
//   }




console.log( -99 < -1);





























/*
function minMax ( numArray ) {
    let resultObj = { min: 0, max: 0 };
    let minNumber = numArray[0];
    let maxNumber = numArray[0];

    function addResultToObj (minNumber, maxNumber) {
        resultObj.max += maxNumber;
        resultObj.min += minNumber;
        return resultObj;
    }

    for ( let i=0; i < numArray.length; i++ ) {

        if ( minNumber <= numArray[i] && maxNumber < numArray[i]) {
            minNumber = minNumber;
            maxNumber = numArray[i];

            addResultToObj(minNumber, maxNumber);
        } else if ( minNumber <= numArray[i] && maxNumber >= numArray[i] ) {
            minNumber = minNumber;
            maxNumber = maxNumber;

            addResultToObj(minNumber, maxNumber);
        } else if ( minNumber <= numArray[i] && maxNumber == numArray[i]) {
            minNumber = minNumber;
            maxNumber = maxNumber;

            addResultToObj(minNumber, maxNumber);
        } else if ( minNumber > numArray[i] && maxNumber >= numArray[i] ) {
            minNumber = numArray[i];
            maxNumber = maxNumber;

            addResultToObj(minNumber, maxNumber);
        } else if ( minNumber > numArray[i] && maxNumber < numArray[i] ){
            minNumber = numArray[i];
            maxNumber = numArray[i];

            addResultToObj(minNumber, maxNumber);
        }
    }
}

console.log(minMax( [ -1, 0, 2, 4, 6, 10 ]));

*/





// function arrayMin(array){
//      var min = array[0]; 

//     for(var i = 0; i < array. length; i++){ 
//         if(min < array[i])
//             { min = min; }
//         else if (min > array[i])
//             { min = array[i + 1];
//         }else if (min == array[i])
//             { min = min; } 
//         } 
//             return min; 
//     };

