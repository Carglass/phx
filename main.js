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
        
    }
}

function Qu(quantity){
this.value = parseFloat(quantity.match(/\d*\.\d*/)[0]);
this.unit = quantity.match(/[a-zA-Z\/]+/)[0];
return {value: this.value, unit: this.unit};
}

test= new Qu('12.1 mg');
test2= new Qu('12.1 mg/mL');

console.log(Phx.add(test,test2));

