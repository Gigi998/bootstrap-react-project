import React from "react";
import { useToursContext } from "../context/toursContext";
import { Card, Offcanvas, Stack } from "react-bootstrap";
import SingleCart from "./SingleCart";
import { convertPrice } from "../utils/convertPrice";

type CartType = {
  open: boolean;
};

const Cart = ({ open }: CartType) => {
  const { cart, closeSidebar, tours } = useToursContext();

  return (
    <Offcanvas show={open} placement="end" onHide={closeSidebar}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {cart.map((item) => {
            return <SingleCart key={item.id} {...item} />;
          })}
          <div className="d-flex align-items-center ">
            <div className="me-auto fs-4">Total</div>
            <div>
              {cart.reduce((acc, item) => {
                const findItem = tours.find((i) => i.id === item.id);
                if (findItem === undefined) {
                  return acc;
                } else {
                  return acc + convertPrice(findItem.price) * item.quantity;
                }
              }, 0)}
              $
            </div>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
