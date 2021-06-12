const express = require("express")
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOpt = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200
}

app.use(cors(corsOpt))

mongoose.connect(process.env.DB_HOST, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}, () => {
	console.log("DB connected")
	let port = 1234
	app.listen(port);
	console.log(`server listening at http://localhost:${port}`);
})


app.use("/", require("./routes/_home"))
app.use("/createQuiz", require("./routes/createQuiz"))
app.use("/getQuiz", require("./routes/getQuiz"))
// user stuff
app.use("/signUp", require("./routes/login/signUp"))
app.use("/signIn", require("./routes/login/signIn"))
app.use("/verifyToken", require("./routes/login/verifyToken"))
app.use("/logout", require("./routes/login/logout"))