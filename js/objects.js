const student=["dinesh",22,'M',"dinesh@gmail.com","8989876543"];
for(let i=0;i<student.length;i++)
{
    document.write("Name is :" +student+ "<br>");
}
document.writeln("<b>Before:</b>"+student+"<br><br><br>");

// student.pop()
// student.join("|")
// student.push("HI")
// student.shift()
// student.reverse();
// student.unshift("Coimbatore")
// student[1]="Delhi"
// student.splice(0,0,"Dinesh","Karthik")
student.splice(3,0,"Dinesh","Karthik")
delete student[6];
document.write(student);

document.writeln("<p><b>After:</b>"+student.reverse());