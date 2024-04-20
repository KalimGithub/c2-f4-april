import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Post = () => {

  
  const [data, setData] = useState({});
  const [postOffice, setPostOffice] = useState([]);
  const [filterValue, setFilterValue] = useState('')
  const [loading, setLoading] = useState(false);
  const { pincode } = useParams();


useEffect(() => {
  fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setData(data[0]) 
      setPostOffice(data[0].PostOffice);
      setTimeout(()=>{setLoading(true)},1000)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  
  return (
    <div className="post">
      <h2>
        Pincode: <span>{pincode}</span>
      </h2>
      <h2>
        Message: <span>{data.Message}</span>
      </h2>
      <div className="filter-div">
        <input
          type="text"
          placeholder="Filter Post Office"
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        />
        <button className="btn filter-btn">Filter</button>
      </div>
      <div className="post-container">
        {
        loading?
        postOffice.map((post) => {
          console.log(post);
          return (
            <div className="card">
              <h3>Name: <span>{post.Name}</span></h3>
              <h3>Branch Type: <span>{post.BranchType}</span></h3>
              <h3>Delivery Status: <span>{post.DeliveryStatus}</span></h3>
              <h3>District: <span>{post.District}</span></h3>
              <h3>Division: <span>{post.Division}</span></h3>
            </div>
          );
        }):
        <h1>Loading...</h1>
        }
      </div>
    </div>
  );
};

export default Post;
