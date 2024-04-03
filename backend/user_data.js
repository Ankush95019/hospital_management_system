const express = require("express");
const cors = require("cors");
const db = require("./config");
const User = require("./schema");

const app = express();
app.use(express.json());
app.use(cors());


app.post("/", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

db();

app.listen(5000,(err)=>{
  if(err){
    console.log('Not connected with server');
  }
  console.log('connected with server 5000');
});
