var car = {};
car.color = "green"
car.milage = 34567
car.turnthekey = function (){
    console.log("engine starts")
}
car.lightson = function (){
    console.log("light is on")
}
car.moveCar = function (){
    console.log("car start moving")
}
console.log(car)
car.turnthekey ();
car.moveCar ();
car.lightson ();
