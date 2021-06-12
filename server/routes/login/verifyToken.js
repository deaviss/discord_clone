const express = require('express');
const UserSchema = require('../../models/UserSchema');
const UserSessionSchema = require('../../models/UserSessionSchema');
const router = express.Router();

router.get('/', async (req, res, next) => {
	let { token } = req.query;

	UserSessionSchema.find({
		_id: token,
		isDeleted: false
	}, (error, sessions) => {
		if (error) {
			return res.json({ success: false, message: "Error: Server error" })
		}
		if (sessions.length != 1)
			return res.json({ success: false, message: "Error: Server error" })
		else {
			return res.json({ success: true, message: "Valid token" })
		}
	})


})

module.exports = router;