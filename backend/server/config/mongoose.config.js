const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost/record_keeper_feb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Connected to MongoDB"))
    .catch(err=>console.log("db connections failed", err))