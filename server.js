const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(bodyParser.json());

// db config
const db = require("./config").mongodbURI;

// api
const items = require("./routes/api/items");

// connect to mongodb
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

// routes
app.use("/api/items", items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
