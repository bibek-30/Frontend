import React, { useState } from "react";

import classes from "../login/LoginForm.module.css";
import Card from "../ui/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    let loginInfo = {
      email: authData.email,
      password: authData.password,
    };
    axios
      .post(`http://127.0.0.1:8000/api/login`, loginInfo)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          navigate(`/home`);
        }
      });
  };
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
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
        <div className={classes.actions}>
          <button
            onClick={(e) => {
              login(e);
            }}
          >
            {" "}
            Sign up
          </button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
