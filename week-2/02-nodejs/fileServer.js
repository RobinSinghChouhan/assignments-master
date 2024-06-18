/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get("/files",(req,res)=>{
  const directoryPath = path.join(__dirname,'files');
  fs.readdir(directoryPath,(err,files)=>{
    if(err)
      {
        res.status(500).send('Internal Server error')
      }
      else
      {
        res.status(200).send({files})
      }
  });
  
});

app.get("/file/:filename",async (req,res)=>{
  const filePath = "./files/"+req.params.filename;
  console.log("FIELPATH: "+filePath);
  let fileData = "";
  await fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err)
      {
        res.status(404).send("File not found");
      }
    fileData = data;
    console.log(data);
    res.status(200).send(fileData);
  }); 
});

app.use((req,res)=>{
res.status(404).send('Route not found');
});

app.listen(port,()=>{
  console.log('running on port ${port}')
});

module.exports = app;