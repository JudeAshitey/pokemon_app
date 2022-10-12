const express = require('express')
const morgan = require('morgan')

const pokemon = require("./models/pokemon")


const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))
app.set("view engine","jsx")
app.engine("jsx",require("express-react-views").createEngine())

app.get('/', (req,res) =>{
    res.send('Welcome to the Pokemon App')
})

app.get("/pokemon", (req,res) =>{
    res.render("Index", {pokemon})
})


app.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
})