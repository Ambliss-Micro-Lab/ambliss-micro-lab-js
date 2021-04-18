import Circuits from '../../src/Circuits.js'

const c1 = new Circuits;

// testing for demux
var data = 1, sel = [0,0]
console.log(c1.demux(data,sel));
var data = 1, sel = [0,1]
console.log(c1.demux(data,sel));
var data = 1, sel = [1,0]
console.log(c1.demux(data,sel));
var data = 1, sel = [1,1]
console.log(c1.demux(data,sel));
