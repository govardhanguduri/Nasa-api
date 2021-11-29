import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import './index.css'

const List = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log("id---", id);

  useEffect(() => {
    getDetails();
  },[id]);

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=ymVixnhsQ6x7ggDu2c0mNBjrrmp8eqxFDMxWdoes`
      );
      const data = response.data;
      setData({
        name: data.name,
        nasa_jpl_url: data.nasa_jpl_url,
        is_potentially_hazardous_asteroid: data.is_potentially_hazardous_asteroid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="card-heading">Astroid-Id Details</h1>
      <p key={data.id}>
        {" "}
        <span class="variable">Name:</span> {data.name}
      </p>
      <p key={data.id}>
        <span class="variable">Nasa_jpl_url:</span> {data.nasa_jpl_url}
      </p>
      <p>
        <span class="variable">Is_potentially_harardous_astroid:</span>{" "}
        {data.is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default List;

