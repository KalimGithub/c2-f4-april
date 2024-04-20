import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Post = () => {

  
  const [data, setData] = useState({});
  const [postOffice, setPostOffice] = useState([]);

  const { pincode } = useParams();
  const navigate = useNavigate();


useEffect(() => {
  fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setData(data[0])
      setPostOffice(data[0].PostOffice);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  
  return (
    <div className="post">
      <h1>Pincode: <span>{pincode}</span></h1>
      <h2>Message: <span>{data.Message}</span></h2>
      {postOffice.map((post)=> {
        console.log(post);
      })}
    </div>
  )
};

export default Post;
