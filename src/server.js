import { createServer, Model } from "miragejs";

let records = [
  {
    id: 1,
    name: "Yohan",
    city: "NY",
    state: "state 1",
    zip: 1234,
    dob: "12-12-1996",
  },
  {
    id: 2,
    name: "Torress",
    city: "Queen",
    state: "state 3",
    zip: 1454,
    dob: "14-05-1998",
  },
  {
    id: 1,
    name: "Yohan",
    city: "Queen",
    state: "state 3",
    zip: 1454,
    dob: "12-08-1994",
  },
];

createServer({
  models: {
    student: Model,
  },

  routes() {
    this.namespace = "api";
    this.get("/get-students", (schema, request) => {
      return schema.students.all();
    });

    this.patch("/edit-students/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let student = schema.students.find(id);

      return student.update(newAttrs);
    });
  },

  seeds(server) {
    server.create("student", {
      id: 1,
      name: "Yohan",
      city: "NY",
      state: "state 1",
      zip: 1234,
      dob: "12-12-1996",
    });
    server.create("student", {
      id: 2,
      name: "Torress",
      city: "Queen",
      state: "state 3",
      zip: 1454,
      dob: "14-05-1998",
    });
    server.create("student", {
      id: 3,
      name: "YohanT",
      city: "Marb",
      state: "state 5",
      zip: 1454,
      dob: "12-08-1994",
    });
  },
});
