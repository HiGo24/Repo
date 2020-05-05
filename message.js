var x=40; //global variable  //2 type of variables--primitive and non ptimitive...no need to define data type use VAR
//new function 
var add=new Function("num1","num2","return num1+num2");  
document.writeln(add(3,5)); 

var add=new Function("num1","num2","return Math.pow( num1,num2)");  
document.writeln(add(3,5)); 
//object by object literal

emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary); 
//array using new keyword
var i;  
var emp = new Array();  
emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (i=0;i<emp.length;i++){  
document.write("<br>"+emp[i] + "<br>");  
}  
//functions
function msg()
{
alert("hello india stay safe stay home :)");
window.value1=200;
var a=40;
var b=20;
var c=a+b;

document.writeln(c);
document.writeln(x);
alert(value1);


/*if(c<80)
	document.write("smaller");
else
	document.write("greater");
*/
}
function msg1()
{
	
	document.writeln(x);
	alert(window.value1);
//creating instance of theobject
var emp1=new Object();
emp1.id=100;
emp1.name="govind";
emp1.salary=8888.99;
document.write(emp1.id+" "+emp1.name+" "+emp1.salary); 

}
function msg2(){
var grade='';  
var result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}
	document.writeln(result);

}
function msg3()
{
	var a='a';
	var b;
	switch(a)
	{
		case 'a':
		b="a grade";
		break;
		case 'b':
		b="b grade";
		break;
		default:
		b="no grade";
	}
		document.writeln(b);
		
		
		var i=11;  
while (i<=15)  
{  
document.write(i + "<br/>");  
i++;  
}  

}


function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary; 
document.write(e.id+" "+e.name+" "+e.salary);  
 
}  
//e=new emp(103,"Vimal Jaiswal",30000);  
  

