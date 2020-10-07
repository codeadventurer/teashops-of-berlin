import React, { useState, useEffect } from "react";
import axios from "axios";
import TeashopCard from "./TeashopCard";
import styled from "styled-components";
import Heading from "../primitives/Heading";

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

export default function Teashops() {
  const [teashops, setTeashops] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/teashops.json")
      .then((resp) => setTeashops(resp.data.data))
      .catch((resp) => console.log(resp));
  }, []);

  const grid = teashops.map((item) => {
    return <TeashopCard key={item.id} {...item} />;
  });

  return (
    <div>
      <Heading>Teashops of Berlin</Heading>
      <Grid>{grid}</Grid>
    </div>
  );
}
