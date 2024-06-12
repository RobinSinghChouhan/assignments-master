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
writeToFile();
readFromFile();
removeSpacesAndWrite();
console.log("after calling");