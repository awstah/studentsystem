import axios from "axios";

axios.defaults.timeout = 10000;

const StudentServices = {
  getStudentsData() {
    return new Promise((res, rej) => {
      axios.get("api/get-students").then(
        (response) => {
          return res(response);
        },
        (error) => {
          return rej(error);
        }
      );
    });
  },
};

export default StudentServices;
