'use strict';
const express= require('express');
const server = express();
const PORT = process.env.PORT || 3030;
server.use(express.static('./public'));
server.get('/test',(request,response)=>{
    response.send('your server is alive ')
})
server.get('/',(req,res)=>{
res.send('home route')
})
server.listen(PORT,()=>{
    console.log(`listening on port${PORT}`)
})

