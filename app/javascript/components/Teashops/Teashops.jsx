import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Teashops() {
  const [teashops, setTeashops] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/teashops.json")
      .then((resp) => {
        setTeashops(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const list = teashops.map((item) => {
    return <li key={item.id}>{item.attributes.name}</li>;
  });
  return <ul>{list}</ul>;
}
