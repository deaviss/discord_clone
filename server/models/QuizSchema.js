const mongoose = require("mongoose")

const QuizSchema = mongoose.Schema({
	title: String,
	entries: [
		{
			question: String,
			answers: [{
				answer: String,
				correct: {
					type: Boolean,
					default: false
				}
			}]
		}
	],
	date: {
		type: Date,
		default: Date.now
	},
	link: String
})

module.exports = mongoose.model("Quiz", QuizSchema);