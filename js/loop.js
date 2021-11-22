

const student = {Name:"Dinesh", Age:22, Gender:'M',District:"Coimbatore",Phone:890890865};
    
for(let stud in student)
    {
        // document.write(std+":"+student[std]+"<br>")
       //document.write("<tr><td>"+stud+":"+student[stud]+"</td></tr>");
       document.write("<tr><td>"+stud+"</td><td>"+student[stud]+"</td></tr>s")
    }

// const student=["dinesh",22,'M',"dinesh@gmail.com","8989876543"];
// for(let i=0;i<student.length;i++)
// {
//     document.write("Names are:" +student+ "<br>");
// }
// document.writeln("<b>Before:</b>"+student);
// student.pop();
// student.unshift("chennai");

// for(let emp of employees)
// {
//     document.write("<tr><td>" + emp + "</td><tr>")
// }