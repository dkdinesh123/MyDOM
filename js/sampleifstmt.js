document.writeln("Hi this is dineshkarthik")


document.writeln("varname is" + (name+2))
document.writeln("varnum is" + (no+10))

let tamil=prompt("Enter marks of tamil")
let English=prompt("enter marks of english")
let total=tamil+English
let age=prompt("enter your age")

if(total>150 && age>18)
{
    document.writeln("<h2> Running vehicle </h2>");
}
else if(age<18 && tamil>60)
{
    document.writeln("<h2> bus is running </h2>");
}
else
{
    document.write("<h2> Dog is parking </h2>");
}
