#!/usr/bin/env node
import Combinational from "../include/digital/Combinational.js"

export default class Circuits extends Combinational{
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