var users = {
  address: function () {
    console.log("Address is Avaliable");
  },

  name: {
    firstname: "",
    lastname: "",
  },
  marks: [100, 98, 67, 56], //       users.marks[3]
};

users.address();

console.log(users.marks[3]);
