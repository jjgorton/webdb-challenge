exports.up = function(knex) {
	return knex.schema.createTable('actions', (tbl) => {
		tbl.increments();
		tbl.string('description', 128).notNullable();
		tbl.text('notes');
		tbl.boolean('completed').defaultTo(false);

		tbl
			.integer('project_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('projects')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('actions');
};
