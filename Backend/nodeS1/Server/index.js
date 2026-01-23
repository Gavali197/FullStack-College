console.log("start");

let Time  = setTimeout(() => {
    console.log("running");
}, 2000);

if(Time._onTimeout){
console.log("close");
}

console.log("hello node js how are you");