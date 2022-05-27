
require('./utils/config/configDb')
require('dotenv').config()
const exprees = require('express')
port = process.env.PORT
const app = exprees()

app.use(cors());
app.use(express.json());


app.get("/", async(req,res) => {
	res.status(200).json({
	message:"Welcome to the iBuy API application"
	})
})



app.listen(port , (req, res) =>{
    console.log(`Running on ${port}`);
})