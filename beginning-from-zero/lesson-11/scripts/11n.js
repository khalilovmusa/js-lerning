console.log('-----------------------------------------------------');

function countWords ( words ) {
    let result = {};
    
    for ( let i=0; i < words.length; i++ ) {
        let word = words[i];

        if ( !result[word] ){
            result[word] = 1;
        } else{
            result[word]++;
        }
    }

    return result;
}

// function countWords(words) {
//     const result = {};

//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];

//       // result[word] adds/accesses a property using whatever is
//       // saved inside the 'word' variable.
//       // If word = 'apple', result[word] will do result['apple']
//       // If word = 'grape', result[word] will do result['grape']
//       if (!result[word]) {
//         result[word] = 1;
//       } else {
//         result[word]++;
//       }
//     }

//     return result;
//   }


console.log(countWords(['apple', 'grape', 'apple', 'apple']));