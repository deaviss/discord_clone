const express = require('express');
const QuizSchema = require('../models/QuizSchema');
const router = express.Router();

router.get('/', async (req, res) => {
	let quizes = await QuizSchema.find();
	if (quizes.length > 0) {
		// let tmpArr = [];
		// quizes.forEach(e => {
		// 	let { title, entries, link } = e;
		// 	tmpArr.push({ title, entries, link })
		// })
		res.json(quizes)
	}
	else
		res.json({ message: "No quizes to show" })
})
/*


*/
router.post('/', async (req, res) => {
	//having trouble ?
	const { link, vote } = req.body;
	res.send({ message: "elo" })
})

module.exports = router;