import Gates from '../include/digital/Gates.js'

export default class Circuits{
    #num_inp;
    #num_ops;
    #inputs = [];
    #outputs = [];

    setInputs(){
        this.#num_inp = arguments.length;
        Object.values(arguments).forEach(input_val => this.#inputs.push(input_val))
    }
    setOutputs(){
        this.#num_ops = arguments.length;
        Object.values(arguments).forEach(output_cal => this.#outputs.push(output_cal))
    }
    getInputs(){
        return this.#inputs;
    }
    getOutputs(){
        return this.#outputs;
    }
}

// const c1 = new Circuits;
// var A = {value:null}, B = {value:null} ,C = {value:null};
// var F = {value:null};

// c1.setInputs(A,B,C);
// c1.setOutputs(F);

// A = 1; B = 2; C = 3;
// F = 5;

// console.log(A,B,C,F);
// console.log(c1.getInputs());
// console.log(c1.getOutputs());