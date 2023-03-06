import React, { useEffect } from "react";
import { useToursContext } from "../context/toursContext";
import { Card } from "react-bootstrap";
import SingleTour from "../components/SingleTour";

const Tours = () => {
  const { tours, loading } = useToursContext();

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <Card>
        <Card.Header className="m-auto">Our top tours</Card.Header>
        <Card.Body className="p-5 d-flex flex-column ">
          {tours.map((item) => {
            return <SingleTour key={item.id} {...item} />;
          })}
        </Card.Body>
      </Card>
    </>
  );
};

export default Tours;
