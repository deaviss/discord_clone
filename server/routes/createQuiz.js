const express = require('express');
const QuizSchema = require('../models/QuizSchema');
const router = express.Router();

router.post('/', async (req, res) => {

	const { title, entries } = req.body;
	let alphabet = 'qazwsxedcrfvtgbyhnujmikolp1234567890QAZWSXEDCRFVTGBYHNUJMIKLOP'
	let linkLength = 13;
	let link = "";
	for (var i = 0; i < linkLength; i++) {
		link += alphabet[Math.floor(Math.random() * (alphabet.length))];
	}

	const newQuiz = new QuizSchema({
		title,
		entries,
		link
	})
	try {
		const savedQuiz = await newQuiz.save();
		console.log(savedQuiz)
		res.json(savedQuiz);
	} catch (err) {
		res.json({ message: err })
	}
})

module.exports = router;