var fName
var books 
var greeting
var lName

fName =prompt("Enter your First name");
lName =prompt("Enter your Last name");
books=prompt("How many books do you read a weak ? " );

document.write( '<h3 >' +" "+"Hey, "+ fullName(fName,lName)+" "+ '</h3>');
var x=Books(books)
//document.write(x);




function Books (books)
{
    if(books>=0)
    {
if (books> 10) {
   greeting= 'Great Job!'; 
}

else {
    greeting='Try harder';
}
    }
    else
    greeting='Please Enter positive number';


    document.write('<h3 >' +" "+ greeting+" "+ '</h3>');
    return greeting;

}

function fullName( fName,lName)
{

return fName +"  " +lName;
}
