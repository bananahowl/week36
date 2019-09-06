function add(n1, n2){return n1+n2;}
function sub(n1,n2){return n1 -n2;}

var cb = function(n1,n2,callback){
  try{
return "Result of " + n1 + " and " + n2 + " = " + callback(n1,n2);

}catch(e){
  //console.log(e.name + ': ' + e.message);
  if(typeof n1 !== "number" || typeof n2 !== "number"){
    console.log("you have a put a number value as the first two parameters");
  }
  else if (typeof callback === "function") {
    console.log("you have a put a ref to a function");
  }
}
  /*if(typeof n1 === "number" || typeof n1 === "number"){
    console.log("you have a put a number value as the first two parameters");
  }
  else if (typeof callback === "function") {

  }*/
}
// What will it print : 3
console.log( add(1,2) )
// What will it print and what does add represent? : it calles the the ref.
console.log( add )
// What will it print: it add the two first values
console.log( add(12,2,3) ) ;
// What will it print:is missing a val so it return a NaH
console.log( add(1) );
// What will it print : the string with add value
console.log( cb(3,3,add) );
// What will it print : the string with subtarcted value
console.log( cb(4,3,sub) );
// What will it print (and what was the problem)
console.log( cb(3,"fasf",add()));
// What will it print
console.log( cb("fsaf", 3,sub) );

function mul(n1,n2){return n1*n2;}

console.log(cb(5,5,mul));

function div(n1,n2){
  try{
      return n1/n2;

  }catch(e){
    return 0;
    console.log(e.name + ": " + e.message);
  }

}
console.log(cb(5,25,div));

var arry =["Lars", "Mogens", "Sam", "Lisa", "Samuel","Bo"];

var sortd = arry.filter(n=> n.length <=3);
// arry.forEach(function (e){console.log(e)});
/*
console.log(arry);
sortd.forEach(function (e){console.log(e)});
console.log(sortd);*/
//arry.forEach( function (e){console.log("<p> Value is " + e + ". </p>")});
var upSortd = sortd.map(v=> v.charAt(0).toUpperCase() + v.slice(1));
function printArry(vals){
  console.log("<ul>");
vals.forEach(function (e){console.log("<li> " + e + " </li>")});
  console.log("<ul>");
}
//printArry(arry);

//opg 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
let carsFilterd = cars.filter(c=> c.year > 1999, c=> c.price <= 5000, c=> c.make== 'volvo')
///let ffilterd = carsFilterd.filter(c=>  c.price <= 5000);
console.log(carsFilterd);
//4a made a function to do make statem for the chosen positon.
function setCars( postion ){
  let valueSet ="INSERT INTO cars ";
  let valueSetMid = "VALUES";
  let carChoiced = [cars[postion].id, cars[postion].year, cars[postion].make,cars[postion].model,cars[postion].price ];
  //cars.map(c=> c.id,c=> c.year,c=> c.make,c=> c.model,c=> c.price );
  let statemtSQL = "INSERT INTO cars (id,year,make,model,price) VALUES ("  + carChoiced.join(",") + ");";
  return statemtSQL;
}

console.log(setCars(0));

//Asynchronous Callbacks
//opg 1
/* this is assumed output for the function
1- "aaaaaaaaaa"
2- "dddddddddd"
3-"bbbbbbbbbb"
4- "ffffffffff"
5- "eeeeeeeeee"

*/
//opg 2 the true output for the function below
/*
aaaaaaaaaa
dddddddddd
ffffffffff
eeeeeeeeee
bbbbbbbbbb*/
/*
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

*/
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain thi
