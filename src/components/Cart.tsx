import React from "react";
import { useToursContext } from "../context/toursContext";
import { Card, Offcanvas, Stack } from "react-bootstrap";
import SingleCart from "./SingleCart";

type CartType = {
  open: boolean;
};

const Cart = ({ open }: CartType) => {
  const { cart, closeSidebar } = useToursContext();
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
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
