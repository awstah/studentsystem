import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import AddStudent from "./pages/AddStudent";
import AboutUs from "./pages/AboutUs";
import Notfound from "./pages/Notfound";
import { useDispatch } from "react-redux";

import { getRecord } from "./features/RecordSlice";

function App() {
  const dispatch = useDispatch();
  const getStudentsHandler = () => {
    dispatch(getRecord());
  };
  useEffect(() => {
    getStudentsHandler();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
