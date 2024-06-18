function counter(){
    let count=0;
    setInterval(function(){
        count+=1;
        console.log(count);
    },1000);
}

let count = 0;

function counterWithoutInterval()
{
    setTimeout(function(){
        count+=1;
        console.log(count);
        counterWithoutInterval();
    },1000);
}

const fs = require('fs');


function readFromFile()
{
    let p = new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log(data);
            resolve(data);
        });
    });
    return p;    
}

function writeToFile(fileContent)
{
    fs.writeFile("a.txt","hello     world    my    name   is       raman","utf-8",function(err,data){
        console.log(data);
    })
}

function removeSpacesAndWrite()
{
    readFromFile().then(function(data){
        let newContent = "";
        let fileContent =  data.trim().replace(/\s+/g, ' ');;
        fs.writeFile("a.txt",fileContent,"utf-8",function(err,data){
            console.log(data);
        })
    })
}


// counterWithoutInterval();
// writeToFile();
// readFromFile();
// removeSpacesAndWrite();
console.log("after calling");

let arr = [1,2,3,4,5];
let b = arr.map(function(i){
    return i*2;
})
console.log(b);

let c = arr.filter(function(i){
    if(i%2==0){
        return i;
    }
})
console.log(c);