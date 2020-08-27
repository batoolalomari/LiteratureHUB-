var fName
var books 
var greeting
var lName
var cat=""
fName =prompt("Enter your First name");
lName =prompt("Enter your Last name");
books=prompt("How many books do you read a weak ? " );




document.write( '<h3 >' +" "+"Hey, "+ fullName(fName,lName)+" "+ '</h3>');

//document.write(x);
document.write(addCtegName(cat) );



function Books (books)
{
    if(books>=0 && isNaN(books))
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



function addCtegName( cat)
{
   var  catNum=prompt("how many category do want to add " );
    
   
   for(var i=0;i<catNum;i++)
    {
        cat=prompt("Enter the category name " );
       
        console.log(cat);

        /*catName=prompt("Enter the category name " );
        cat =catName;
        console.log(catName);*/
        document.write('<p >' +" "+ i+cat +" "+ '<p>');
    }

    return cat;
    
}