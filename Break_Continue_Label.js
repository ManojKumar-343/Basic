// Break Statment
console.log("Break Statment");
console.log("Loop startes");

for(let i = 0; i<=5; i++){
    if(i == 3) break;
console.log("i: "+ i);
}
console.log("Loop ends");

// Continue Statment
console.log("Continue Statment");
console.log("Loop startes");

for(let i = 0; i<=5; i++){
    if(i == 3) continue;
console.log("i: "+ i);
}
console.log("Loop ends");

// Label Statment
console.log("Label Statment");
console.log("Loop startes");

outer: for(let i = 0; i<=5; i++){
    console.log("i: "+ i);
    inner: for(let j = 0; j<= 5; j++){
        if(j == 3) break outer;
        console.log("j :"+ j);
    }
}
console.log("Loop ends");