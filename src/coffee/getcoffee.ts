export class MustHaveCoffee{
	coffeeType: string;
	constructor(){
		console.log("Must have coffee")
	}
	setCoffeeType(name:string){
		this.coffeeType = name
	}
}