/** 
* @param {import("knex").Knex} knex
* @returns {Promise<void>}
*/


exports.up = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.createTable("cars", (table) => {
    table.increments(); // id kolonu otomatik olarak artar
    table.string('vin').notNullable().unique(); // notNullable = boş olamaz --- uniqie = eşsiz olmalı
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.integer('mileage').notNullable();
    table.string('title');
    table.string('transmission');
  })
};

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.dropTableIfExists('cars');
};
