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
	option1: {
		type: String,
		required: true,
	},
	answer1: {
		type: Boolean,
		default: false,
	},
	option2: {
		type: String,
		required: true,
	},
	answer2: {
		type: Boolean,
		default: false,
	},
	option3: {
		type: String,
		required: true,
	},
	answer3: {
		type: Boolean,
		default: false,
	},
	option4: {
		type: String,
		required: true,
	},
	answer4: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Questions', quizSchema);
