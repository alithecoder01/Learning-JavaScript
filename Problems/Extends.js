
class Car{
    constructor(brand,year){
        this.brand= brand
        this.year= year
    }


    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    
    display(){
        return this.present() +' it is a ' + this.model;

    }
}

const cr = new Model("ES","Luxeray Car");

console.log(cr.display())


