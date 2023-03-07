import React from "react";
import { useToursContext } from "../context/toursContext";
import { Button, Card, Stack } from "react-bootstrap";
import { convertPrice } from "../utils/convertPrice";

type SingleCartType = {
  id: string;
  quantity: number;
};
const SingleCart = ({ id, quantity }: SingleCartType) => {
  const { tours, removeItem } = useToursContext();

  const findTours = tours.find((item) => item.id === id);

  if (findTours == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="m-2">
      <img
        src={findTours.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div>
        {<span className="text-muted">x{quantity}</span>}
        <div>{convertPrice(findTours.price)}$</div>
      </div>
      <div className="ms-auto">{convertPrice(findTours.price) * quantity}$</div>
      <Button variant="outline-danger" onClick={() => removeItem(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default SingleCart;
