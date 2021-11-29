import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router";

const Form = () => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  const handleSubmit = () => {
    // console.log("123", id);
    navigate(`/list/${id}`);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const getRandomId = async() => {
    setLoading(true);
    try{
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ymVixnhsQ6x7ggDu2c0mNBjrrmp8eqxFDMxWdoes`);
      const data = response.data;
      var result = data.near_earth_objects[Math.floor(Math.random() * 19)].id;
      console.log(result)
      console.log(data)

      navigate(`/list/${result}`);
      setLoading(false);
    }
    catch(error){
      console.log(error)
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Enter Unique-Id</h1>
        <form className="form-container" onSubmit={onSubmit}>
          <input
            id="id"
            data-testid="id"
            onChange={(e) => setId(e.target.value)}
            className="input"
            placeholder="Unique Id"
          />
          <br />
          <button type="button" onClick={handleSubmit} className="button">
            Search
          </button>
          <br /><br/>
          <button
            type="button"
            className="button-random"
            data-testid="getRandomid"
            onClick={getRandomId}
          >
            {loading ? "Loading..." : "Randomid"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
