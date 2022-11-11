class Food{
    constructor(name,sellingPrice,costToMake){
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.costToMake = costToMake;
    }

    calculateProfit(){
        return this.sellingPrice - this.costToMake;
    }
}
 
class Pizza extends Food{
    constructor(name,sellingPrice,costToMake,crustType,sause,cheeseType,toppings,size){
        super(name,sellingPrice,costToMake)
        this.crustType = crustType;
        this.sause = sause;
        this.cheeseType = cheeseType;
        this.toppings = toppings;
        this.size = size;
    }

}

class Salad extends Food{
    constructor(name,sellingPrice,costToMake,toppings,dressing,size,croutons){
        super(name,sellingPrice,costToMake)
        this.toppings = toppings;
        this.dressing = dressing;
        this.size = size;
        this.croutons = croutons;
    }

}

order001 = new Pizza("Hawaiian",21.99,3.99,"plain","tomato","mozzarella","Ham & Pinnaple","Large");

console.log(order001.calculateProfit());