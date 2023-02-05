import React from "react";
import { useState } from "react";

import classes from "./RegisterForm.module.css";
import Card from "../ui/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    mobile_number: "",
    confirm_password: "",
  });

  const register = (e) => {
    e.preventDefault();
    let data = {
      name: authData.name,
      gender: authData.gender,
      email: authData.email,
      password: authData.password,
      confirm_password: authData.confirm_password,
      mobile_number: authData.mobile_number,
    };
    axios.post(`http://127.0.0.1:8000/api/register`, data).then((response) => {
      console.log(response);
      if (response.data.status === 200) {
        navigate(`/`);
      }
    });
  };

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={authData.name}
            onChange={(e) => {
              setAuthData({
                ...authData,
                name: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            value={authData.gender}
            onChange={(e) => {
              setAuthData({
                ...authData,
                gender: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mail">Email</label>
          <input
            type="email"
            id="mail"
            value={authData.email}
            onChange={(e) => {
              setAuthData({
                ...authData,
                email: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={authData.password}
            onChange={(e) => {
              setAuthData({
                ...authData,
                password: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            value={authData.confirm_password}
            onChange={(e) => {
              setAuthData({
                ...authData,
                confirm_password: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            id="number"
            value={authData.mobile_number}
            onChange={(e) => {
              setAuthData({
                ...authData,
                mobile_number: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.actions}>
          <button
            onClick={(e) => {
              register(e);
            }}
          >
            Sign In
          </button>
        </div>
      </form>
    </Card>
  );
};

export default RegisterForm;
