
exports.up = function(knex) {
   return knex.schema.createTable('cars', tbl => {
      tbl.increments()

      tbl
         .string('VIN', 128)
         .notNullable()
         .unique()

      tbl
         .string('Make', 128)
         .notNullable()

      tbl
         .string('Model', 128)
         .notNullable()

      tbl
         .float('Mileage')
         .notNullable()

      tbl
         .string('TransmissionType', 128)

      tbl
         .string('TitleStatus', 128)
   })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cars')
};
