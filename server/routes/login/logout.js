const express = require('express');
const UserSessionSchema = require('../../models/UserSessionSchema');
const router = express.Router();

router.get('/', async (req, res, next) => {
	let { token } = req.query;

	UserSessionSchema.findOneAndUpdate({
		_id: token,
		isDeleted: false
	}, { $set: { isDeleted: true } }, null, (error, sessions) => {
		if (error) {
			return res.json({ success: false, message: "Error: Server error" })
		}
		if (sessions) {
			if (sessions.length != 1)
				return res.json({ success: true, message: "Signed out" })
			else {
				return res.json({ success: false, message: "Error: Server error" })
			}
		} else {
			return res.json({ success: false, message: "You are not logged in" })
		}
	})


})

module.exports = router;