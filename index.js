const knex = require("knex");
const config = require("./knexfile").development;

//create database connection
const db = knex(config);

// basic of structured query language
//relational database

db("puppies")
  .select()
  .then((puppies) => {
    puppies.forEach((puppy) => {
      console.log(
        "Here is " + puppy.name + ". They are owned by " + puppy.owner + "."
      );
    });
  });

//fint single puppy
const id = 1;
db("puppies")
  .where("id", id)
  .select()
  .first()
  .then((puppy) => {
    console.log("-------");
    console.log(
      "Here is " + puppy.name + ". They are owned by " + puppy.owner + "."
    );
  });

// To Insert a new puppy
db("puppies")
  .insert({ name: "Geaorge", owner: "Rex", breed: "Cat" })
  .then((puppyIds) => {
    console.log("-------");
    console.log("New record created with id " + puppyIds[0]);
  });

//UPDATE Database
const idToUpdate = 4;
db("puppies")
  .update({ name: "Omphalus" })
  .where("id", idToUpdate)
  .then((updateCount) => {
    console.log("---");
    console.log("Updated " + updateCount + " record update cound");
  });

//Delete Database
const idToDelete = 4;
db("puppies")
  .where("id", idToDelete)
  .delete()
  .then((deleteCount) => {
    console.log("---");
    console.log("Updated " + deleteCount + " record deleted");
  });
