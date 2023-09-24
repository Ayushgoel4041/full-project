// import express from "express"
// import path from "path";
const express = require("express");
const path = require("path");
require("./database/conn")
const app = express();

const port = process.env.PORT || 5000;
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));
app.set("view engine" , "React")

app.get("/" ,(req,res)=>{
  res.render("sign")
});

app.listen(port, (err) => {
  if (err) {
      console.error(`Error starting server: ${err}`);
  } else {
      console.log(`Server is working on port ${port}`);
  }
});
  