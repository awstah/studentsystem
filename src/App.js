import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import AddStudent from "./pages/AddStudent";
import AboutUs from "./pages/AboutUs";
import Notfound from "./pages/Notfound";
import { useDispatch } from "react-redux";
import StudentServices from "./services/students";
import { addStudent } from "./features/slices/StudentsSlice";

function App() {
  const [isloading, setisloading] = useState(true);
  const [data, setdata] = useState([]);
  console.log(data);
  const dispatch = useDispatch();
  const getStudentsHandler = () => {
    setisloading(true);
    StudentServices.getStudentsData().then((res) => {
      dispatch(setdata(res.data.students));
      setisloading(false);
    });
  };
  useEffect(() => {
    getStudentsHandler();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home isloading={isloading} />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
