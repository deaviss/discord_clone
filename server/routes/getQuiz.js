const express = require('express');
const QuizSchema = require('../models/QuizSchema');
const router = express.Router();


router.get('/:link', async (req, res) => {

	try {
		const quiz = await QuizSchema.findOne({ link: req.params.link })
		console.log(quiz);
		res.json(quiz)
	} catch (err) {
		res.json({ message: err })
	}
})


module.exports = router;