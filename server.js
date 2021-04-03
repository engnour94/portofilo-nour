'use strict';
const { request, response } = require('express');
const express= require('express');
const server = express();
const PORT=3030;
// const PORT = process.env.PORT || 3030;
server.get('/test',(request,response)=>{
    response.send('your server is alive ')
})
server.use(express.static('./public'));
server.get('/',(req,res)=>{
res.send('home route')
})
server.listen(PORT,()=>{
    console.log(`listening on port${PORT}`)
})