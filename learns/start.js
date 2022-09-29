console.log(global.myvar);

global.myvar = 23;


console.log(global.myvar);
console.log(process.platform);
console.log(process.env.USER);
process.on('exit', function bye (){
    console.log("bye bye");
})