import Circuits from '../../src/Circuits.js'

const c1 = new Circuits;

//Full Adder

console.log(c1.full_adder(0,0,0));
console.log(c1.full_adder(0,0,1));
console.log(c1.full_adder(0,1,0));
console.log(c1.full_adder(0,1,1));
console.log(c1.full_adder(1,0,0));
console.log(c1.full_adder(1,0,1));
console.log(c1.full_adder(1,1,0));
console.log(c1.full_adder(1,1,1));
