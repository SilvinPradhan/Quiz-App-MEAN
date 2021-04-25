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
	.use(express.static(path.join(__dirname, 'public')))
	.use(morgan('dev'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(cors())
	.use('/api', quizRoutes)
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
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
