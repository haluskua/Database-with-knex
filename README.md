

// Sqlite3 steps

npm i knex sqlite3
npx knex init

npx knex migrate:make puppies
npx knex seed:make puppies
npx knex migrate:latest
npx knex seed:run

// open db Browser for Sqlite3 to view table contents and (id)