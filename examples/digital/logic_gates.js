import Circuits from '../../src/Circuits.js'

const c1 = new Circuits;

// Testing logic gates

// Example 1 : F1 = AB + BC

var A = true;
var B = true;
var C = false;

console.log(c1.or_gate(c1.and_gate(A,B), c1.and_gate(B,C)));

// Example 2 : F2 = X&Y&not(Z) + X&not(Y)&Z

var X = true;
var Y = true;
var Z = false;

console.log(c1.or_gate(c1.and_gate(c1.and_gate(X,Y),c1.not_gate(Z)), c1.and_gate(c1.not_gate(Y),c1.and_gate(X,Z))));

// Example 3 : F3 = P ^ Q & R ^ S

var P = true;
var Q = true;
var R = false;
var S = false;

console.log(c1.and_gate(c1.xor_gate(P,Q),c1.xor_gate(R,S)));

// Example 4 : F4 = nor( nand( xnor( D, E ), F), G )

var D = true;
var E = true;
var F = false;
var G = false;

console.log(c1.nor_gate(c1.nand_gate(c1.xnor_gate(D,E),F),G));
