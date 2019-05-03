const express = require('express');
// const cors = require('cors');

const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');
// const projectHelper = require('./data/helpers/projectModel');

const server = express();

server.use(express.json());
// server.use(cors());

server.get('/', (req, res) => {
	res.send(`
    <h1>Getting Things Done - API</h1>
    `);
});

// const idMatcher = (req, res, next) => {
// 	const id = req.body.project_id;
// 	const check = projectHelper.getProjectActions(id);
// 	if (check === null) {
// 		console.log('passed', id, check);
// 		next();
// 	} else {
// 		res.status(404).json({ message: 'The project with the specified ID does not exist.' });
// 	}
// };

// server.use('/projects', projectsRouter);
// server.use('/actions', actionsRouter);

module.exports = server;
