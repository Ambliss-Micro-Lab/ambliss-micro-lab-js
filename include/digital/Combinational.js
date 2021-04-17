export default class Combinational{

    half_adder(x, y){
        sum = xor_gate(x,y);
        carry = and_gate(x,y);
        return {sum, carry};
    }
    full_adder(x, y, cin){
        sum = xor_gate(x,y,cin);

        wire1 = and_gate(x,y);
        wire2 = and_gate(cin,x);
        wire3 = and_gate(cin,y);
        
        carry = or_gate(wire1,wire2,wire3);
        return {sum, carry};
    }
    mux(data, sel){
        var ind=0;
        for(var i=0;i<sel.length;i++){
            ind=ind*2+sel[i];
        }
        return data[sel];
    }
}