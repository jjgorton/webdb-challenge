const db = require('../../data/dbConfig');

module.exports = {
	get,
	insert,
	getById
};

function get() {
	return db('projects');
}

function insert(project) {
	return db('projects').insert(project);
}

// function getById(id) {
// 	return (
// 		db('actions')
// 			.innerJoin('projects', 'projects.id', 'actions.project_id')
// 			// .select('projects.id', 'projects.name', 'projects.description', 'projects.completed')
// 			.where('actions.project_id', id)
// 	);
// 	// .first()
// }

function getById(id) {
	let project = db('projects').where({ id });
	let actions = db('actions').where({ project_id: id });

	return Promise.all([ project, actions ]).then((results) => {
		const [ project, actions ] = results;
		return { ...project, actions: [ ...actions ] };
	});
}
