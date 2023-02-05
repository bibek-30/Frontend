import React from "react";
import Card from "../ui/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "../Rooms/AddRoomForm.module.css";
import axios from "axios";

const AddRoomForm = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState();

  const [authData, setAuthData] = useState({
    title: "",
    location: "",
    price: "",
    desc: "",
  });

  const test = (e) => {
    setImage(e.target.files[0]);
    console.log("photo", image);
  };

  const AddRoomDetails = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        title: authData.title,
        location: authData.location,
        price: authData.price,
        desc: authData.desc,
      })
    );

    formData.append("image", image);

    const headers = {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/add-room`,
        formData,
        headers
      );
      console.log(response);

      const { data } = response;
      if (data.status === 200) {
        navigate(`/`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={authData.title}
            onChange={(e) => {
              setAuthData({
                ...authData,
                title: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label>Location</label>
          <input
            type="text"
            id="location"
            value={authData.location}
            onChange={(e) => {
              setAuthData({
                ...authData,
                location: e.target.value,
              });
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Price</label>
          <input
            type="number"
            id="price"
            value={authData.price}
            onChange={(e) => {
              setAuthData({
                ...authData,
                price: e.target.value,
              });
            }}
          />
        </div>
        <div className={classes.imgControl}>
          <label>Image</label>
          <input
            type="file"
            id="image"
            onChange={test}
            // accept=".jpg,.png,.jpeg"
            aria-label="A photo of a beautifully decorated room"
          />
        </div>
        <div className={classes.control}>
          <label>Description</label>
          <input
            type="desc"
            id="desc"
            value={authData.desc}
            onChange={(e) => {
              setAuthData({
                ...authData,
                desc: e.target.value,
              });
            }}
          />
        </div>
        <div className={classes.actions}>
          <button
            onClick={(e) => {
              AddRoomDetails(e);
            }}
          >
            Add Rooms
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddRoomForm;
