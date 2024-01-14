// Task 1 : Factorial
// second solution
let num =3;
var res= 1
for (let i= 1; i<=num; i++)
{
   res*=i
}
console.log(res);

// Task 2 : How many digits ?
let number = -5000000;
let l=0;
while(number >= 1 || number <=-1 ){
    number/=10
     l++ }
console.log(l);

// Task 3 :  Time to draw !
var rows= 5
for (let cl = 0; cl < rows; cl++) {
    var output = '';
    for (let j =0; j < rows - cl; j++) {
        output += ' '
    };
    for (let k = 1; k <= 2*cl-1; k++) {output += '*'};
    console.log(output);
}
    let wood="|"
    let space=''
    for(let i=1; i<rows; i++) {
        space+=" ";
        }
    let goal= space + wood;
    console.log(goal);



