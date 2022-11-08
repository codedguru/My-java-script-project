//switch statement to determine age and allowance 
var age = 18
switch(age){
    case age > 65:
        console.log("you will recieve your pension")
        break;
    case age < 65 && age >= 18:
        console.log("you will recieve your salary")
        break;
    case age < 18:
        console.log("you will recieve your allowance")
        break;
    default:
        console.log("you entry is invalid")
        break;
}