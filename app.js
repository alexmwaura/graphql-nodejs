"use strict";

const express = require("express");
const graphqlHTTp = require("express-graphql");

const app = express();

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
