export default class Gates{

        not_gate(value){
            return !value;
        }
        and_gate(){
            arguments[0] = Boolean(arguments[0]);
            var and_val = arguments[0];
            for(var i = 1; i< arguments.length; i++){
                arguments[i] = Boolean(arguments[i])
                and_val = Boolean(and_val) & arguments[i];
            }
            return and_val;
        }
        or_gate(){
            var or_val = arguments[0];
            for(var i = 1; i< arguments.length; i++){
                or_val = or_val | arguments[i];
            }
            return or_val;
        }
        nand_gate(){
            var and_val = arguments[0];
            for(var i = 1; i< arguments.length; i++){
                and_val = and_val & arguments[i];
            }
            const nand_val = !and_val;
            return nand_val;
        }
        nor_gate(){
            var or_val = arguments[0];
            for(var i = 1; i< arguments.length; i++){
                or_val = or_val | arguments[i];
            }
             const nor_val = !or_val;
             return nor_val;
        }
        xor_gate(){
            var xor_val = arguments[0];
            for(var i = 1; i< arguments.length; i++){
                xor_val = xor_val ^ arguments[i];
            }
            return xor_val;
        }
        xnor_gate(){
            var xor_val = arguments[0];
            for(var i = 1; i< arguments.length; i++){
                xor_val = xor_val ^ arguments[i];
            }
            const xnor_val = !xor_val;
            return xnor_val;
        }
};


// const c2 = new Gates;

// var A = true;
// var B = false;

// console.log(c2.and_gate(1,1,1,1,1,1,1), c2.nand_gate(1,1,1,1,1,1,1));
// console.log(c2.or_gate(1,0,0,0,0,0,0,0), c2.nor_gate(1,0,0,0,0,0,0,0));
// console.log()
// console.log(c2.xor_gate(0,0), c2.xnor_gate(0,0));
// console.log(c2.xor_gate(0,1), c2.xnor_gate(0,1));
// console.log(c2.xor_gate(1,0), c2.xnor_gate(1,0));
// console.log(c2.xor_gate(1,1), c2.xnor_gate(1,1));
// console.log()
// console.log(c2.not_gate(A))
// console.log(c2.not_gate(B))