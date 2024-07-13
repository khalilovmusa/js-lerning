// [10, 20, 30]
let firstValue = 0;
let lastValue = 0;

function arraySwap(array) {

    for(let i = 0; i < array.length; i++) {
        firstValue = array[0];
        lastValue = array[i];
    }

    array.pop();
    array.shift();
    array.unshift(lastValue);
    array.push(firstValue);
}

arraySwap([10, 20, 30]);

function arraySwapAgain(array) {
    let lastIndex = array.length - 1;

    let firstValue = array[0];
    let lastValue = array[lastIndex];

    array[lastIndex] = firstValue;
    array[0] = lastValue;

    return array;
}

console.log(arraySwapAgain([10,20,30]));

/*
      function arraySwap(array) {
        const lastIndex = array.length - 1;

        / We need to save the values first before
        / swapping. Otherwise, if we swap directly,
        / we would lose one of the values.
        const lastValue = array[lastIndex];
        const firstValue = array[0];

        array[0] = lastValue;
        array[lastIndex] = firstValue;

        return array;
      }
      console.log(arraySwap([1, 20, 22, 24, 5]));
      console.log(arraySwap(['hi', 'hello', 'hey']));
      */