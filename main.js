var Phx = {
    add: function(a,b){
        if (a.unit === b.unit){
            let value = a.value + b.value;
            let unit = a.unit;
            console.log((value + ' ' + unit));
            return (Qu(value + ' ' + unit));
        } else {
            console.log('unit consistency is wrong');
            return false;
        }   
    },
    mult: function(a,b){
        let value = a.value * b.value;
        let firstUnits = [];
        let secondUnits = [];
    },
    decomposeUnit: function(a){
        const num = [];
        const den = [];
        let parsee = a;
        let matchArray = parsee.match(/[a-zA-Z]+/);
        num.push(matchArray[0]);
        parsee = parsee.slice(num[0].length);
        while (parsee !== "") {
            if(parsee[0] === '/'){
                parsee = parsee.slice(1)
                let newDen = parsee.match(/[a-zA-Z]+/)[0];
                den.push(newDen);
                parsee = parsee.slice(newDen.length);
            }
        }
        return {
            num: num,
            den: den,
        };
    }
}

function Qu(quantity){
this.value = parseFloat(quantity.match(/\d*\.\d*/)[0]);
this.unit = quantity.match(/[a-zA-Z\/]+/)[0];
this.litteral = quantity;
this.num = Phx.decomposeUnit(this.unit).num;
this.den = Phx.decomposeUnit(this.unit).den;
return {value: this.value, unit: this.unit, litteral: this.litteral, num: this.num, den: this.den};
}

test= new Qu('12.1 mg');
test2= new Qu('12.1 mg/kg/mL');

console.log(Phx.add(test,test2));

console.log(test2);
