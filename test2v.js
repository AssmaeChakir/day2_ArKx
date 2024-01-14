// Functions & Reusability
// Task 1 : Going back in Time !
// factorical
let num= 5
function factorical(num)
{
    let res= 1
    for (let i= 1; i<=num;i++)
    {
       res=res*i
    }
    return res;
}

console.log(factorical(num));
// nDigits(number)
function nDigits(){
var number = 123542;
var l = 1;
while( ( number /= 10 )>= 1 ){ l++ }
console.log(l);
}
nDigits();
// numbertoday(day)
function numbertoday(day)
{
    var day= 4;
    switch (day){
        case 1 :
            console.log ("Monday");
            break;
        case 2 :
            console.log ("Tuesday");
            break;
        case 3 :
            console.log ("Wednsday");
            break;
        case 4 :
            console.log ("Thursday");
            break;
        case 5 :
            console.log ("Friday");
            break;
        case 6 :
            console.log ("Saturday");
            break;
    
        case 7:
            console.log ("Sunday");
            break;
    default:
        console.log ("Unvalid Day");
    }
}
numbertoday();
// Maximum
function Maximum(r,t,v){
    var r = -15;
    var t= 6;
    var v = 2.6;
if(t>r && t>v) {
    console.log("max number =",t);
}
else if (r>t && r>v ) {
    console.log("max number =",r);
}
else{
    console.log( "max number =",v);
}}
Maximum();
// mygrade()
function mygrade(score){
    var score = 83;
    if (score > 85)
    {
        console.log("grade is A.");
    }
    else if (score> 70){
        console.log("grade is B.");
    }
    else if (score> 55){
        console.log("grade is C.");

    }
    else if (score> 40){
        console.log("grade is D.");

    }
    else if (score> 15){
        console.log("grade is E.");
    }
    else{
        console.log("grade is F.");
}

} 
mygrade();
// Task 2 : The Extended Factorial
function coombinator(n,p){
    var coombinator= factorical(n)/(factorical(p)*factorical(n-p));
    return coombinator;
}
console.log(coombinator (5,2));
// Task 3 :  The Calculator
let x = 5;
let y = "c";
let z = 2;
function Calculator(x,y,z){
    let calcule
    if (y==="*"){
        calcule= x*z;
    }
    else if (y==="+") {
       calcule= x+z;
    }
    else if (y==="/") {
       calcule= x/z;
    }
    else if (y==="%") {
       calcule= x%z;
    }
    else if(y==="-"){
        calcule= x-z;
    }
    else if (y==="c") {
        calcule= coombinator (x,z)
    }
    else{
       return " please enter a valid operator"
    }
    return calcule
}
console.log(Calculator(x,y,z));
