/*var age = 30;   

if (age >40){
    console.log("Please proceed with the registration")
} else {
    console.log("Please try again after 1st of July");
}*/


// var var = 5; This will result in an error

//console.log("Hello world!");

//console.log('The value of x is ${x}');

/*function add(x,y){
    var z = x + y;
    return z;
}

var a = 10;
var b= 20;

var sum = add(10,20);

console.log(sum);

// anonymous function

var anon_add = function (x,y) {
    var z = x + y;
    return z;
}
    
var sum = anon_ad(a,b);

// arrow functions
var arrow_add = (x,y) => {
    var z = x + y;
    return z;
}

var pi = () => {
    return 3.142;
}*/

// f (p1,p2)
// - variables
//- functions

function conduct_exam(subject, print_questions) {
    console.log("Please start your exam")
    print_questions(subject);
    console.log("Please stop writing");

}

conduct_exam("Maths", function (subject) {
    if (subject == "Maths") {
        console.log("What is the answer for 52 x 72?")
    } else {
        console.log("How many bones in the human body?")
    }
})