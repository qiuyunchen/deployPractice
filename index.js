const app = require('express')();

app.get('/ping', (req, res) =>{
    res.status(200).json({'pong': true})
})

const port = process.env.PORT || 3500;
app.listen(port, ()=>{
    console.log('server listening on port 3500');
})