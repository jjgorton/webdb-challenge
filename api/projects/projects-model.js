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

function getById(id) {
	return db('projects')
		.innerJoin('actions', 'projects.id', 'actions.project_id')
		.select('*')
		.where('projects.id', id)
		.first();
}
