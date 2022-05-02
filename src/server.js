import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/get-students", () => {
      return {
        students: [
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
        ],
      };
    });
  },
});
