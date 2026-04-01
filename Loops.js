
for(let i = 0; i<=5; i++){
    console.log("MAnoj");
}

console.log("5th Table");
for(let i = 1; i<=10; i++){
        console.log(i+"*"+"5"+"="+(5*i));
    }

// While loop
console.log("While loop");
let a = 0;
let Max = 5

// while(a<= Max){
//     console.log(a);
//     a++;
// }

// Do...While
console.log("Do...while loop");
do{
    console.log(a);
    a++;
}while(a<= Max);

    // To get the Even numbers
console.log("Even numbers between 1 to 50 are");
for (let i = 1;i<=50;i++){
    if(i%2==0){
        console.log(i);  
    }
}

    // To get the Odd numbers
console.log("Odd numbers between 1 to 50 are");
for(i=1;i<=50;i++){
    if(i%2){
        console.log(i);
    }
}

    // To reverse the string by using loop
let b = "Manoj";
let c = "";
for(let i=b.length-1;i>=0;i--){
    c+=b[i];
}
console.log(c);

    // Another way to revetrse the String.
let d = b.split("").reverse().join("");
console.log(d);



