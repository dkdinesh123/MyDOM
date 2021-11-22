var tamil1=prompt("Enter tamil marks");
var english1=prompt("Enter english marks");

var total=tamil1+english1;

let day=" ";

if(total>tamil1 && english1)
{
   day="monday";
}
else if(total<tamil1 && english1)
{
    day="tuesday";
}

else
{
    day="none";
}

switch(day)
{
    case "monday":
        alert("car is running");
        break;

    case "tuesday":
        alert("bike is running");
        break;

    default:
        alert("no days occurs");
        break;
}
