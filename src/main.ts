import * as $ from "jquery";
import {MustHaveCoffee} from "./coffee/getcoffee"

class ReallyCoffee extends MustHaveCoffee{
	coffeeType = "bulletProff"
	constructor(){
		super()
	}
	f(input:boolean){
		let a = 100
		if (input){
			let b = a + 123
			return b
		}
		return a;
	}

	setCoffeeType(name:string){
		// super.setCoffeeType(name);
		console.log("hello there" + this.coffeeType);
		$('body').css('background-color', 'red');
		console.log("test");

	}


}

let newCoffee = new ReallyCoffee()
newCoffee.f(true)
newCoffee.setCoffeeType("bulletProff")

let oldCoffee = new MustHaveCoffee()

