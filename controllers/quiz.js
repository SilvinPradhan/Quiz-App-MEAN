const Questions = require('../models/quiz');
const { erroHandler, errorHandler } = require('../helpers/dbErrorHandler');

exports.create = async (req, res) => {
	const { description } = req.body;
	const { title } = req.body;
	const { option1 } = req.body;
	const { option2 } = req.body;
	const { option3 } = req.body;
	const { option4 } = req.body;
	const { answer1 } = req.body;
	const { answer2 } = req.body;
	const { answer3 } = req.body;
	const { answer4 } = req.body;
	let questions = new Questions({
		description,
		option1,
		option2,
		option3,
		option4,
		answer1,
		answer2,
		answer3,
		answer4,
		title,
	});
	questions.save((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400).json({
				error: erroHandler(err),
			});
		}
		res.json(data);
		console.log('Endpoint to create a new quiz');
	});
};

exports.listAll = (req, res) => {
	Questions.find({}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err),
			});
		}
		res.json(data);
	});
	console.log('Endpoint to get a summary of all quizzes.');
};

exports.listSingle = async (req, res) => {
	try {
		const _id = req.params.id;

		const question = await Questions.findOne({ _id });
		if (!question) {
			return res.status(404).json({});
		} else {
			return res.status(200).json(question);
		}
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

exports.submitSingle = (req, res) => {
	res.json({
		message: 'Endpoint to submit a single quiz result',
	});
};

exports.remove = async (req, res) => {
	try {
		const _id = req.params.id;
		const question = await Questions.deleteOne({ _id });
		if (question.deletedCount === 0) {
			return res.status(404).json('Deleted successfully!');
		} else {
			return res.status(204).json();
		}
	} catch (err) {
		return res.json({
			error: err,
		});
	}
};
