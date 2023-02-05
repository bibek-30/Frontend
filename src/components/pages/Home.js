import React from "react";
import Card from "../ui/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "../Rooms/AddRoomForm.module.css";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");

  const test = (e) => {
    setImage(e.target.files[0]);
    console.log("photo", image);
  };

  const AddRoomDetails = async (e) => {
    e.preventDefault();
    console.log(image);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("desc", desc);

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/add-room`,
        formData,
        headers
      );

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
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </div>
        <div className={classes.control}>
          <label>Location</label>
          <input
            type="text"
            id="location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label>Price</label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
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
            onChange={(e) => {
              setDesc(e.target.value);
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

export default Home;
