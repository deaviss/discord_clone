const express = require('express');
const router = express.Router();
const UserSchema = require(".././../models/UserSchema")

router.post('/', async (req, res, next) => {
	let { username, email, password } = req.body;

	if (!username || !email || !password)
		return res.json({ success: false, message: 'Error, some fields are blank' })

	email = email.toLowerCase();
	username = username.toLowerCase();
	UserSchema.find({
		username
	}, (err, prevUser) => {
		if (err)
			return res.json({ success: false, message: "Error: Server error" })
		else if (prevUser.length > 0) {
			return res.json({ success: false, message: "Error: Account already exists" })
		}

		const newUser = new UserSchema({
			username,
			email,
		});
		newUser.password = newUser.generateHash(password)
		newUser.save((err, user) => {
			if (err) {
				return res.json({ success: false, message: "Error: Server error" })
			} else {
				return res.json({ success: true, message: "Signed up" })
			}
		})



	})
})

module.exports = router;