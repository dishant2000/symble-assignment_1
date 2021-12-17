const readline = require('readline');
const r1 = readline.Interface({
    input : process.stdin,
    output: process.stdout
})
class FixEquation{
    constructor(){}
    
    static findMissingDigit(Equation){
        // removing the spaces if its there between the variables
        Equation = Equation.split(' ').join('');
        //extracting each variable in a,b,c,d
        let a = Equation.slice(0,Equation.indexOf('*'));
        let b = Equation.slice(Equation.indexOf('*') + 1, Equation.indexOf('+'));
        let c = Equation.slice(Equation.indexOf('+') + 1, Equation.indexOf('='));
        let d = Equation.slice(Equation.indexOf('=') + 1);
        // Original variable for the variable which contain the '?' character.
        let original;
        // answer variable for the replacement of the variable which contains '?' character.
        let answer;

        // first find out which variable contains '?'
        // the perform arithmatics accodingly 
        if(d.indexOf('?') != -1){
            original = d;
            let aint = parseInt(a);
            let bint = parseInt(b);
            let cint = parseInt(c);

            let tans = aint * bint + cint;
            answer = tans;
            if(!FixEquation.checkEquation(aint,bint,cint,answer)) answer = -1;
        }
        else if(a.indexOf('?') != -1){
            original = a;
            let dint = parseInt(d);
            let bint = parseInt(b);
            let cint = parseInt(c);
            let tans;
            if(bint != 0)
                tans = (dint - cint)/bint;
            else
                tans = -1;
            answer = tans;
            if(tans != -1 && !FixEquation.checkEquation(answer,bint,cint,dint)) answer = -1;
        }
        else if(b.indexOf('?') != -1){
            original = b;
            let dint = parseInt(d);
            let aint = parseInt(a);
            let cint = parseInt(c);
            let tans;
            if(aint != 0)
                tans = (dint - cint)/aint;
            else
                tans = -1;
            answer = tans;
            if(tans != -1 && !FixEquation.checkEquation(aint,answer,cint,dint)) answer = -1;
        }
        else if(c.indexOf('?') != -1){
            original = c;
            let dint = parseInt(d);
            let bint = parseInt(b);
            let aint = parseInt(a);
            let tans;
            tans = (dint - (aint * bint));
            answer = tans;
            if(!FixEquation.checkEquation(aint,bint,answer,dint)) answer = -1;
        }
        return FixEquation.compareAns(original,answer);
    }
    //extracting the value which will replace '?'.
    static compareAns(original,answer){
        if(answer === -1) return -1;
        answer = answer.toString();
        if(original.length != answer.length)
        return -1; 
        else return answer.charAt(original.indexOf('?'));
    }
    // for checking the found solution is wheather correct of not for removing the floating point error.
    static checkEquation(a,b,c,d){
        let lhs = a*b + c;
        return lhs === d;
    }
}


// taking input from the console.
let stdin_input = "";
r1.question("Equation: ",(data)=>{
    stdin_input = data;
    r1.close();
})
r1.on("close",()=>{
    console.log(FixEquation.findMissingDigit(stdin_input));
})
    




