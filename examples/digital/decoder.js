import Circuits from '../../src/Circuits.js'

const c1 = new Circuits;

// testing for decoder

var sel = [0,0]
console.log(c1.decoder(sel));
var sel = [0,1]
console.log(c1.decoder(sel));
var sel = [1,0]
console.log(c1.decoder(sel));
var sel= [1,1]
console.log(c1.decoder(sel));
