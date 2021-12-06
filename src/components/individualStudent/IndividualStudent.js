import React from "react";
import { useParams } from "react-router-dom";

export const IndividualStudent = () => {
  const { lastName } = useParams();
  return <h1>{lastName}</h1>;
};
