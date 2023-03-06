import React from "react";
import { useToursContext } from "../context/toursContext";
import { Button, Card, Stack } from "react-bootstrap";

type SingleCartType = {
  id: string;
  quantity: number;
};
const SingleCart = ({ id, quantity }: SingleCartType) => {
  const { tours } = useToursContext();

  const findTours = tours.find((item) => item.id === id);
  if (findTours == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="m-2">
      <img src={findTours.image} style={{ width: "100px", height: "100px" }} />
      <div>
        {findTours.name} {<span className="text-muted">x{quantity}</span>}
        <div>{findTours.price}$</div>
      </div>
      <div>{findTours.price * quantity}</div>
    </Stack>
  );
};

export default SingleCart;
