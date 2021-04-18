import Circuits from '../src/Circuits.js'

const c1 = new Circuits;

// testing for mux
var data = [0,1,0,1], sel = [0,0]
console.log(c1.mux(data,sel));
var data = [0,1,0,1], sel = [0,1]
console.log(c1.mux(data,sel));
var data = [0,1,0,1], sel = [1,0]
console.log(c1.mux(data,sel));
var data = [0,1,0,1], sel = [1,1]
console.log(c1.mux(data,sel));
console.log()

// testing for demux
var data = 1, sel = [0,0]
console.log(c1.demux(data,sel));
var data = 1, sel = [0,1]
console.log(c1.demux(data,sel));
var data = 1, sel = [1,0]
console.log(c1.demux(data,sel));
var data = 1, sel = [1,1]
console.log(c1.demux(data,sel));

var A = true;
var B = false;

console.log()
console.log(c1.and_gate(1,1), c1.nand_gate(1,1));
console.log(c1.or_gate(1,0), c1.nor_gate(1,0));
console.log()
console.log(c1.xor_gate(0,0), c1.xnor_gate(0,0));
console.log(c1.xor_gate(0,1), c1.xnor_gate(0,1));
console.log(c1.xor_gate(1,0), c1.xnor_gate(1,0))

console.log(c1.xor_gate(1,1), c1.xnor_gate(1,1));
console.log()
console.log(c1.not_gate(A))
console.log(c1.not_gate(B))