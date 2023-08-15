/*let personSimple = "John Doe";

const personObject = new Object();
personObject.firstName = "john";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyeColor = "blue";

console.log(personSimple);
console.log(personObject);
*/

/*let personSimple = "John Doe";

const personObject = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}

personObject.age = 10;

console.log(personSimple);
console.log(personObject);
*/

/*class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`meu nome é ${this.name} e tenho ${this.age} anos`)
    }
}

const user1 = new User('joao', 30);
user1.introduce();
*/

class Pizza {
    constructor(base, sauce, toppings, cheese){
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }
    getDescription(){
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and lots of cheese.`;
    }
    getTimerBase(){
        if(this.base == 'traditional'){
            return 10;
        }else if(this.base == 'integral'){
            return 15;
        }else{
            return 'This base does not exist!';
        }
    }

    getTimerSauce(){
        if(this.sauce == 'tomato'){
            return 10;
        }else if(this.sauce == 'pesto'){
            return 10;
        }else{
            return 'This tomato does not exist!';
        }
    }
    getTimerTopping(){
        if(this.toppings == 'pepperoni'){
            return 20;
        }else if(this.toppings == 'calabresa'){
            return 18;
        }else{
            return 'This ingredient does not exist!';
        }
    }
    getTimerCheese(){
        if(this.cheese == 'mozzarela'){
            return 12;
        }else if(this.cheese == 'catupiry'){
            return 110;
        }else{
            return 'This ingredient does not exist!';
        }
    }
    
}

const myPizza = new Pizza('traditional', 'tomato', 'pepperoni', 'mozzarela');
console.log(myPizza.getDescription());
console.log('Time to cook the pizza = ' +myPizza.getTimerBase());
console.log('Time to cook the tomato = ' +myPizza.getTimerSauce());
console.log('Time to cook the pepperoni = ' +myPizza.getTimerTopping());
console.log('Time to cook the cheese = ' +myPizza.getTimerCheese());

let totalTime = +myPizza.getTimerBase() +myPizza.getTimerSauce() +myPizza.getTimerTopping() +myPizza.getTimerCheese();
console.log("time for pizza: " +totalTime)