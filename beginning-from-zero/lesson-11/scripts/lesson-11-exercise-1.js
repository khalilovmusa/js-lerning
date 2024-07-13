let lastArrayValue = 0;

function getLastValue (array) {
    for (let i = 0; i < array.length; i++){
        lastArrayValue = array[i];
        
    }
    console.log(lastArrayValue);
}

getLastValue([10, 20, 30, 40, 50, 60]);
getLastValue(['hello', 'hi', 'origin']);

function getLastValueArr(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

console.log(getLastValueArr([10,20,25,35,45]));
console.log(getLastValueArr(['Banana', 'hello', 'how', 'are', 'you']));

/*
      function getLastValue(array) {
        const lastIndex = array.length - 1;
        return array[lastIndex];
      }
      console.log(getLastValue([1, 20, 22, 24, 5]));
      console.log(getLastValue(['hi', 'hello', 'hey']));
*/