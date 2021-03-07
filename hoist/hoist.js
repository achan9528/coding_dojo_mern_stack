// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// 1
// console.log(hello);                                   
// var hello = 'world';                                 
// prediction = prints 'world'
// var hello = 'world';                                 
// console.log(hello);
// hello = 'world';


//2 
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// prediction: prints magnet
// var needle = 'haystack';
// function test(){
//         var needle = 'magnet';
//         console.log(needle);
//     }
// test();


// 3 
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// prediction: prints super cool
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// prediction: prints chicken, then prints half-chicken
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     var food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }


// // 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// prediction: error because there is no definition
// for the function mean()
// var mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
// mean();
// console.log(food);
// console.log(food);


//6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// prediction: prints disco, rock, rock, then disco
// correction: prints undefined, rock, r&b, disco
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     var genre = "r&b";
//     genre = "rock";
//     console.log(genre);
//     console.log(genre);
// }
// console.log(genre);

// 7 
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// prediction: prints san jose, seattle, seattle, san jose
// correction: prints san jose, seattle, burbank, san josedojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//8 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// prediction: prints error because it can't store the values within 
// a const;
// correction: defines dojo the first time but afterwards it cannot
// be defined because of the const type