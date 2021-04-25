const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	alternatives: [
		{
			text: {
				type: String,
				required: true,
			},
			isCorrect: {
				type: Boolean,
				required: true,
				default: false,
			},
		},
	],
});

module.exports = mongoose.model('Questions', quizSchema);
