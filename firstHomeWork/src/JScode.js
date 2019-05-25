import MakeArr from './JScode2.3.js.js';
import MakeObj from './JScode4.js.js';
import isEmpty from './JScode5.js.js';
import factorial from './JScode6.js.js';

window.years = function () { 
 
    let year = prompt('?')
    let yearEnd = prompt('?')

    if ((isNaN(year)) && (isNaN(yearEnd))) {
        year == 1019;
        yearEnd == 2019;
    }
        for (let i = year; i <= yearEnd; i++) {
            let a = i % 4;
            if (a == 0) {
                console.log(i);
            }
        }
    }

    
        