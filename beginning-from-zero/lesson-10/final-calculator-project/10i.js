let displayCalculationElem = document.querySelector('.js-updateCalculation');
let calculation =  localStorage.getItem('calculation') || '';
displayCalculationElem.innerHTML = eval(calculation) || 0;

function updateCalculation(value){
    

    calculation += value;
    displayCalculationElem.innerHTML = calculation;
    localStorage.setItem('calculation' , calculation);
    
}