const db = require('../../data/dbConfig');

module.exports = {
	get,
	insert
};

function get() {
	return db('actions');
}

function insert(action) {
	return db('actions').insert(action);
}
