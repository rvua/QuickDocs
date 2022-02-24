const express = require("express");
const path = require('path');

const app = express();

const port = 8000;

const cors = require("cors");

app.use(cors());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/record.routes")(app);

app.listen(port, ()=>console.log(`running on port ${port}.`));