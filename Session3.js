/*There are two types of coercion in JavaScript:

1) Implicit Coercion: Type conversion is done by JavaScript is Implicit Coercion.

2) Explicit Coercion: Type conversion is done in code using the inbuilt functions 
like Number(), String(), Boolean(), etc is Explicit Coercion.*/

console.log("2"*"2");

var num1 = prompt("Enter num1");
var num2 = prompt("Enter num2");
if(num1==num2){
	var ans = Number(num1) + Number(num2)
	document.write(ans)
}



 var k = 12 + "" //output is 12 as number 12 is converted to string
 console.log(k,typeof(k));


 var k = "15" *2 //output is 30 as string 15 is converted to number
 console.log(k,typeof(k));


 var k = "Hello" + null  //output is null as null is converted to string
 console.log(k,typeof(k));


 var k = undefined +6; //output is NAN as undefined could not be converted to number
 console.log(k,typeof(k));



var k = null + 25 //output is 25 as null is converted to 0(number)
console.log(k,typeof(k)); 



var k = true + true // output is 2 as true is converted to number 1(1+1=2)
console.log(k,typeof(k));



var k = true * true // output is 1 as true is is converted to number 1(1*1=1)
console.log(k,typeof(k));  


var k = false + 10;  // output is 10 as false converted to number 0(0+10=10)
console.log(k);


console.log(12/0);
console.log("test")


var x =12;
console.log(x)


// console.log(y)
var x; 
x=12;
console.log(x)

// true-----1
// false----0





var k = 12=="12"; //output is true as 

console.log(k,typeof(k))



var k = 12 === "12";
console.log(k)


var k = true == 1; //output is true as true boolean is converted to number 1
console.log(k)


var k = "true" == true     //"true"-----NAN       true----1
console.log(k)



var k = Number("25")
console.log(k,typeof(k))



var k = Number("")
console.log(k,typeof(k));




var k = Number(null)
console.log(k,typeof(k));



var k = Number(true)
console.log(k,typeof(k));


var k = Number(false)
console.log(k,typeof(k));


var k = Number("test")
console.log(k,typeof(k));




var k = String(25)
console.log(k,typeof(k));


var k = String(null) //"null"
console.log(k,typeof(k));




var k = String(true) //"true"
console.log(k,typeof(k));




var k = String(false) //"false"
console.log(k,typeof(k));


var k = Boolean(25);
console.log(k,typeof(k))



var k = Boolean(-25);
console.log(k,typeof(k))


var k = Boolean(0);
console.log(k,typeof(k))

var k = Boolean(1);
console.log(k,typeof(k))

var k = Boolean(null);
console.log(k,typeof(k))






var std_name = "tom";
var std_name = "john";
var std_name = "alex";
var std_name = "selena";


var std_name = ["tom","selena","alex","john","sam"];
console.log(std_name)
console.log(typeof(std_name));


var city_info = [25,11.89,14.2]

var city_info = {
	temp : 25,
	lat : 11.89,
	lon :14.2
}


document.write(city_info);
console.log(city_info);

document.write(city_info.temp+"<br>"+city_info.lat+"<br>"+city_info.lon+"<br>");

document.write(Object.entries(city_info)+"<br>");
document.write(Object.keys(city_info)+"<br>");
document.write(Object.values(city_info)+"<br>");




var a = "hello";
switch(a){
	case 1: 
	document.write("inside case 1");
	break
	case 2:
	document.write("inside case 2");
	break;
	case 3:
	document.write("inside case 3");
	break;
	case 4:
	document.write('inside case 4');
	break;
	case "hello":
	document.write("inside hello case");
	break;
	default:
	document.write('default case');
}





















































