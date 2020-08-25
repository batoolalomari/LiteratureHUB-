var fName
var books 
var greeting
var lName

fName =prompt("enter your First name");
lName =prompt("enter your Last name");
books=prompt("How many books do you read a weak?");
document.write("Hey, "+ fName +"  "+ lName+ ", how are you today?");



if (books> 10) {
   greeting= 'Great Job!'; 
}

else {
    greeting='Try harder';
}
document.write('<h3>' + greeting+ '</h3>');


