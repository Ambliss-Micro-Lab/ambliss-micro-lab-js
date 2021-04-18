import Gates from './Gates.js'

export default class Combinational extends Gates{

    half_adder(x, y){
        var sum = this.xor_gate(x,y);
        var carry = this.and_gate(x,y);
        return {sum, carry};
    }

    full_adder(x, y, cin){
        var sum = this.xor_gate(x,y,cin);

        var wire1 = this.and_gate(x,y);
        var wire2 = this.and_gate(cin,x);
        var wire3 = this.and_gate(cin,y);
        
        var carry = this.or_gate(wire1,wire2,wire3);
        return {sum, carry};
    }

    half_subtractor(x, y){
        var difference = this.xor_gate(x,y);
        var x_bar = this.not_gate(x);
        var borrow = this.and_gate(x_bar,y);
        return {difference, borrow};
    }

    full_subtractor(x, y, bin){
        var difference = this.xor_gate(x,y,bin);

        var x_bar = this.not_gate(x);

        var wire1 = this.and_gate(x_bar,bin);
        var wire2 = this.and_gate(x_bar,y);
        var wire3 = this.and_gate(y,bin);
        
        var borrow = this.or_gate(wire1,wire2,wire3);
        return {difference, borrow};
    }

    mux(data, sel){
        var ind=0;
        for(var i=0;i<sel.length;i++){
            ind = ind*2 + sel[i];
        }
        return data[ind];
    }
    
    demux(data, sel){
        var ind = 0;
        for(var i = 0 ; i < sel.length ; i++){
            ind = ind * 2 + sel[i];
        }
        var n = Math.pow(2,sel.length);
        var out = new Array(n).fill(0);
        out[ind] = data;
        return out;
    }

    encoder(data){
        var ind;
        for(var i = 0 ; i < data.length ; i++){
            if(data[i] == true){
                ind = i;
                break;
            }
        }
        var num = data.length - ind - 1;
        
        var n = Math.log2(data.length);
        var sel = new Array(n).fill(0);
        var i = n - 1;
        while(num!=0){
            sel[i] = num%2;
            num = num/2;
            num = parseInt(num);
            i=i-1;
        }
        return sel;
    }

    decoder(sel){
        var ind = 0;
        for(var i = 0 ; i < sel.length ; i++){
            ind = ind * 2 + sel[i];
        }
        var n = Math.pow(2,sel.length);
        var data = new Array(n).fill(0);
        data[n-ind-1] = true;
        return data;
    }
}