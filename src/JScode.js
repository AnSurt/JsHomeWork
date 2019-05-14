import MakeArr from './JScode2.3.js';
import MakeObj from './JScode4.js';
import isEmpty from './JScode5.js';
import factorial from './JScode6.js';

window.years = function () { 
    
    let year = prompt('?')
    let yearEnd = prompt('?')

    if ((isNaN(year)) && (isNaN(yearEnd))) {
        year == 1019;
        yearEnd == 2019;

        for (let i = year; i < yearEnd; i++) {
            let a = i % 4;
            if (a == 0) {
                console.log(i);
            }
        }
    }
    else {
        for (let i = year; i < yearEnd; i++) {
            let a = i % 4;
            if (a == 0) {
                console.log(i);
            }
        }
    }
}





