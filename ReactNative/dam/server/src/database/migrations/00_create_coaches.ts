import { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('coaches', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
    table.string('linkedIn').notNullable();
    table.string('instagram').notNullable();
    table.string('tiktok').notNullable();
    table.string('youtube').notNullable();
    table.string('linkX').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('coaches');
}