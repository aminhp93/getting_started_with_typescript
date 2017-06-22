class SweetSweetBasil{
	color:string;
	name:string;
	// constructor(name:string, startColor:string){
	// 	console.log("Hello " + name)
	// 	this.color = startColor
	// }
	constructor(){
		
	}

	getColor(){
		console.log(this.color)
	}
}

let basil = new SweetSweetBasil("World", "green")
basil.getColor()

console.log(basil.color);

class Basil extends SweetSweetBasil{
	constructor(name:string, startColor:string){
		// super(name, startColor)
		super()
		this.name = name
		this.color = startColor
	}

	setNewColor(newColor:string){
		this.color = newColor
		super.getColor()
	}
}

let basil3 = new Basil("basil", "bright green")

basil3.getColor()
basil3.setNewColor("gray")
basil3.getColor()