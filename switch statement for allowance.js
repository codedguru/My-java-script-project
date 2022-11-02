const age = 100
switch(age){
    case age > 65:
        console.log("You get your income from your pension");
        break;
    case age < 65 && age >= 18:
        console.log("Each month you get a salary")
        break;
    case age < 18:
        console.log("You get an allowance")
        break;
    default:
        console.log("The value of the age variable is not numerical")
        break;
}