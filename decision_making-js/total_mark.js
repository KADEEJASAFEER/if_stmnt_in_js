var name=prompt("enter name");
var mark1=prompt("enter mark1:");
var mark2=prompt("enter mark2:");
var mark3=prompt("enter mark3:");
var total=mark1+mark2+mark3;
if(total>=140){
alert("your grade is: A");
}
else if((total<=140)&(total>120)){
alert("your grade is: A");
}
else if((total<120)&total>100){
alert("your grade is: B+");
}
else if((total<100)&total>80){
alert("your grade is: B");
}
else{
alert("you failed");
}
