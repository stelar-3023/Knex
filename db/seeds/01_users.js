exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { name: "Steve", email: "test1@test.com" },
        { name: "Dawn", email: "test2@test.com" },
        { name: "Brookelynn", email: "test3@test.com" },
      ]);
    });
};
