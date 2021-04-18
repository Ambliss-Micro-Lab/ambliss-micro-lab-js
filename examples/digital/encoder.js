import Circuits from '../../src/Circuits.js'

const c1 = new Circuits;

// testing for encoder
var data = [0,0,0,1]
console.log(c1.encoder(data));
var data = [0,0,1,0]
console.log(c1.encoder(data));
var data = [0,1,0,0]
console.log(c1.encoder(data));
var data = [1,0,0,0]
console.log(c1.encoder(data));
