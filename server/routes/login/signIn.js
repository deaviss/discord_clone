const express = require('express');
const UserSchema = require('../../models/UserSchema');
const UserSessionSchema = require('../../models/UserSessionSchema');
const router = express.Router();

router.post('/', async (req, res, next) => {
	let { username, email, password } = req.body;

	if (!username || !password)
		res.json({ success: false, message: 'Error, some fields are blank' })


	UserSchema.find({
		username
	}, (err, users) => {
		if (err)
			return res.json({ success: false, message: "Error: Server error" })
		else if (users.length != 1) {
			return res.json({ success: false, message: "Error: Invalid" })
		}
		const user = users[0];
		if (!user.validPassword(password)) {
			return res.json({ success: false, message: "Error: Invalid password" })
		}

		const userSession = new UserSessionSchema();
		userSession.userId = user._id;
		userSession.save((err, doc) => {
			if (err) {
				return res.json({ success: false, message: "Error: Invalid" })
			}
			return res.json({
				success: true,
				message: "Valid sign in",
				token: doc._id
			})
		})


	})
})

module.exports = router;