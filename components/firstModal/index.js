import React from "react";
import { Modal } from "react-bootstrap";
// import { Button } from "antd";

export default function FirstModal(props) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.close}
        // backdrop="static"
        // style={{
        //   background: "#FFFFFF",
        //   boxShadow:
        //     "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
        //   borderRadius: "10px",
        //   border: "none",
        // }}
      >
        <Modal.Header
          closeButton
          style={{ border: "none", background: "white" }}
        />
        {props.children}
      </Modal>
    </div>
  );
}
