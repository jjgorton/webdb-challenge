const express = require('express');

const db = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => {
	db
		.get()
		.then((actions) => {
			res.status(200).json(actions);
		})
		.catch((err) => {
			res.status(500).json({ error: 'No!' });
		});
});

// router.get('/:id', (req, res) => {
// 	const actionId = req.params.id;
// 	db
// 		.get(actionId)
// 		.then((actions) => {
// 			console.log(actions.length);
// 			if (actions.length === 0) {
// 				res.status(404).json({ message: 'The project with the specified ID does not exist.' });
// 			} else {
// 				res.status(200).json(actions);
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: "This project's actions could not be retrieved." });
// 		});
// });

router.post('/', (req, res) => {
	const actionData = req.body;
	if (actionData.description && actionData.project_id) {
		db
			.insert(actionData)
			.then((project) => {
				res.status(201).json(project);
			})
			.catch((err) => {
				res.status(500).json({ error: 'There was an error while saving the action to the project' });
			});
	} else {
		res.status(400).json({ errorMessage: 'Please provide a description and a valid project_id.' });
	}
});

// router.delete('/:id', (req, res) => {
// 	const actionId = req.params.id;
// 	db
// 		.remove(actionId)
// 		.then((action) => {
// 			if (!action) {
// 				res.status(404).json({ message: 'The action with the specified ID does not exist.' });
// 			} else {
// 				res.status(204).end();
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'The action could not be removed' });
// 		});
// });

// router.put('/:id', (req, res) => {
// 	const actionId = req.params.id;
// 	const actionData = req.body;

// 	projectHelper.getProjectActions(actionData.project_id).then((project) => {
// 		if (project.length === 0) {
// 			res.status(400).json({ errorMessage: 'Please provide an existing project id.' });
// 		}
// 	});

// 	if (!actionData.project_id || !actionData.description || !actionData.notes) {
// 		res.status(400).json({ errorMessage: 'Please provide all required data.' });
// 	} else {
// 		db
// 			.update(actionId, actionData)
// 			.then((action) => {
// 				if (!action) {
// 					res.status(404).json({ message: 'The action with the specified ID does not exist.' });
// 				} else {
// 					res.status(200).json(action);
// 				}
// 			})
// 			.catch((err) => {
// 				res.status(500).json({ error: 'The action information could not be modified.' });
// 			});
// 	}
// });

module.exports = router;
