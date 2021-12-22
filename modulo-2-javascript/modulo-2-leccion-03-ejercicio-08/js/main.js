'use strict';

const actualYear = 2021;
let nextYear;

nextYear = actualYear >= 0 ? actualYear + (4 - (actualYear % 4)) : 4;

console.log(nextYear);