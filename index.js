const app = require('express')();

app.get('/ping', (req, res) =>{
    res.status(200).json({'pong': true})
})

app.listen(3500, ()=>{
    console.log('server listening on port 3500');
})