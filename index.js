const express = require("express");

const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json",'utf-8'));
const index = fs.readFileSync("index.html",utf-8);