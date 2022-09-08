import React from "react";
import { Card } from "react-bootstrap";

export default function ModalCard(props) {
  return (
    <div>
      <Card
        style={{
          // position: 'absolute',
          //   left: "492px",
          //   top: "197px",
          background: "green",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "219px",
        }}>
        {props.children}
      </Card>
    </div>
  );
}
