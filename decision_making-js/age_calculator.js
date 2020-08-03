var cdate=3
var cmnth=8
var cyear=2020
var bdate=prompt("enter date");
var bmnth=prompt("enter month");
var byear=prompt("enter year");
var age=cyear-byear;
if(cmnth<bmnth){
age-=1;

}
if(cmnth<=bmnth){
if(cdate<bdate){
age-=1;
}
}
prompt("your age is:"+age);