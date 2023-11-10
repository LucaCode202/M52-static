const express = require('express');

//Getting express package so we can use it on our project

const app = express()

//setting up express library so we can use it elswhere in the code

const port = 5001

//start our server and keep it running on 5001

//send a response when a request is made to localhost

// app.get('/', (req, res)=>{
//     res.send("Hello World ")
// })

app.use('/', express.static("public")) // send the public folder in the respone when a request is recieved

app.get('/home', (req, res)=>{
    res.send("Hello World")
})

app.get('/about', (req, res)=>{
    res.send("Hello World 2")
})

app.get('/html', (req, res)=>{
    res.send("<h1>Hello World 3</h1>")
})

app.get('*', (req, res) =>{
    res.send("<h1 style='font-size:30px; color:red; padding-top: 40vh; padding-left:40vw'> 404 Error</h1>")
    res.send("<button type="button" onclick="location.href='/home.html'">Home</button>")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});