import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pincode);
    pincode?navigate(`/post/${pincode}`):alert("Please enter a valid pincode")
  };

  return (
    <div className="home">
      <h1>Enter Pincode:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
        <button className="btn lookup-btn">Lookup</button>
      </form>
    </div>
  );
};

export default Home;
