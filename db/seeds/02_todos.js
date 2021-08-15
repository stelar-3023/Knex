exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        { title: "go to store for milk", user_id: 1 },
        { title: "walk the dog", user_id: 2 },
        { title: "go to the gym", user_id: 3 },
        { title: "mow the yard", user_id: 3 },
        { title: "get the mail", user_id: 3 },
        { title: "get some headphones", user_id: 3 },
      ]);
    });
};
