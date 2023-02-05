import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import AddRooms from "./components/pages/AddRooms";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addroom" element={<AddRooms />} />
      </Routes>
    </Layout>
  );
}

export default App;
