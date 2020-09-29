import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.li`
  list-style: none;
  border: 1px solid black;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TeashopCard(props) {
  const { name, slug, avg_score } = props.attributes;
  return (
    <Card>
      <Link to={`/teashops/${slug}`}>{name}</Link>
      <p>score = {avg_score}</p>
    </Card>
  );
}
