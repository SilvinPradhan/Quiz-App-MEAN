const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const chalk = require('chalk');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const quizRoutes = require('./routes/quiz');

express()
	.use(express.static('./quiz-app-mean/dist/quiz-app-mean'))
	.use(morgan('dev'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(cors())
	.use('/api', quizRoutes)
	.set('view engine', 'ejs')
	.get('/*', (req, res, next) => res.sendFile(path.join(__dirname + 'quiz-app-mean/dist/quiz-app-mean/index.html')))
	.listen(PORT, () => console.log('Listening on ' + chalk.magentaBright(`http://localhost:${PORT}`)));
// Database Configuration
const db = async () => {
	try {
		const success = await mongoose.connect(process.env.DATABASE, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(chalk.blueBright('MongoDB successsfully connected.'));
	} catch (err) {
		console.log(chalk.redBright('Error in the in the Database.'));
	}
};
// Run DB
db();
