var num1=prompt("enter number1");
var num2=prompt("enter number2");
var num3=prompt("enter number3");
if((num1>num2) && (num1>num3)){
if(num2>num3){
alert(num2+ "is second largest");
}
else{
alert(num3+ "is second largest");
}
}
else if((num2>num1) && (num2>num3)){
if(num1>num3){
alert(num1+ "is second largest");
}
else{
alert(num3+ "is second largest");
}
}
else if((num3>num1) && (num3>num2)){
if(num1>num2){
alert(num1+ "is second largest");
}
else{
alert(num2+ "is second largest");
}
}