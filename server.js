const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

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

// serve static assets if production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
