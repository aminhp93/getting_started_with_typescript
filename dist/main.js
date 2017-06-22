var SweetSweetBasil = (function () {
    function SweetSweetBasil(name) {
        console.log("Hello " + name);
    }
    SweetSweetBasil.prototype.color = function () {
        console.log("Green");
    };
    return SweetSweetBasil;
}());
var basil = new SweetSweetBasil("World");
basil.color();
