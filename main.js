function Phx(quantity){
this.value = quantity.match(/1/);
    console.log(this.value);
}

test= new Phx('12.1 mg');