import React from "react";
import { Card, Button } from "react-bootstrap";
import { useToursContext } from "../context/toursContext";

type SingleTourProps = {
  name: string;
  info: string;
  image: string;
  price: number;
  id: string;
};

const SingleTour = ({ name, info, image, price, id }: SingleTourProps) => {
  const { addToCart, getQuantity, removeItem, decrease } = useToursContext();

  const quantity = getQuantity(id);

  return (
    <Card className="align-items-center m-2 pt-3">
      <Card.Title>{name}</Card.Title>
      <Card.Img
        src={image}
        height="400px"
        style={{ objectFit: "cover", width: "40em" }}
      />
      <Card.Body className="p-5">
        <Card.Text>{info}</Card.Text>
        <div className="d-flex flex-column align-items-center">
          {quantity === undefined ? (
            <>
              <Button onClick={() => addToCart(id)}>Add to cart</Button>
              <h2 className="mt-3">{price}$</h2>
            </>
          ) : (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decrease(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  in cart
                </div>
                <Button onClick={() => addToCart(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeItem(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleTour;
