



console.log(true == 1);
console.log(true === true);
console.log(4 <= 4);
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean(false));

let num = 5;
let anotherNum = 8;
console.log(num != "5");
let i = 1;
let lastName = "johnson";
let j = "2";
let status = true ;
let hello = "hello"
let helloWorld = "hello world"
 console.log(typeof(i));
 console.log(typeof(helloWorld))


 console.log(typeof(3 + "3"))



 let f = 20 ;
 let c = 30 ;
 console.log(f + c);
 console.log(f - c);
 console.log(c - f);
 console.log(f * c);
 console.log(f / c);
 let z = 10 ;
 z = f * c ;
 let resultOne = z * c ;
 let o = 15 ;
 let p = 9 ;
 console.log(o % p);
 let q = 20 ;
 q *=o + p ;   
 let resultTow = q;
 console.log(resultTow); 
 o++;
 console.log(o);
 p--;
 console.log(p);
 let resultThree = o - p; 
 
 console.log(resultOne % resultTow);

 function change() {
     console.log("test");
     document.getElementById("navHome").innerHTML = "emoH";
     document.getElementById("navHome").style.backgroundColor = "pink";
 }
 function print() {
     console.log("full name: ," + document.getElementById("vorname").value +  document.getElementById("nachname").value + "land:" +  document.getElementById("land").value);
 }
 function small() {
     let element = document.getElementById("element");
     element.classList.add("small");
     element.classList.remove("middle");
     element.classList.remove("big");
 }
 function middle() {
    let element = document.getElementById("element");
    element.classList.remove("small");
    element.classList.remove("big");
    element.classList.add("middle");
}
function big() {
    let element = document.getElementById("element");
    element.classList.remove("small","middle");
    element.classList.add("big");
}
function back(){
    let randomColor = Math.floor(Math.random() * 19000000);
    document.body.style.backgroundColor="#" + randomColor;
    document.getElementById("color").innerHTML ="#" + randomColor;
    document.getElementById("coco").style.backgroundColor =  document.getElementById("color").innerHTML;
}

