const express = require('express');
const QuizSchema = require('../models/QuizSchema');
const router = express.Router();

router.get('/', async (req, res) => {

	res.json({ message: "it works" })
})
/*


*/
router.post('/', async (req, res) => {
	//having trouble ?
	const { link, vote } = req.body;
	res.json({ message: "it works" })
})

module.exports = router;