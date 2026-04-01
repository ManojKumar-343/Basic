let fruits = ["Apple", "Orenge", "Banana", "Mango", "Grapes", "Pine Apple"];

    // To print the values in the array.
console.log(fruits);

    // Returns a Boolean value if it is an Array.
console.log(Array.isArray(fruits));
    
    // Gives the No.of items in the array.
console.log(fruits.length);

    // Gives the Last before index of the array.
console.log(fruits.length-1);

    // To Add another item to the existing array.
fruits[6] = "Blueberry";
console.log(fruits);


    // Another way of declaring an Array.
let Car = new Array("Audi", "Benz", "BMW", "TATA");
    console.log(Car);
    


    // for of loop....Gives every items in the array without giving any increment.
    console.log("for of loop");
    for(let OneFruit of fruits){
        console.log(OneFruit);
    }

    // for in loop....Gives the intex one by one without giving any increment.
    console.log("for in loop");
    for (OneFruit in fruits){
        console.log(OneFruit);
    }

    // Gives the items in the array one by one with its index without giving any increment.
    for(OneFruit in fruits){
        console.log(OneFruit,fruits[OneFruit]);
    }

    // Objects in JS.

    const Mydata = {
        Apple: "120RS",
        Orenge: "80RS",
        Banana: "30RS"
    }
    console.log(Mydata.Orenge);

    for (const data in Mydata){
        console.log(data,Mydata[data]);
    }

    
