import React from "react";
import { Navbar } from "../../components/nav";
import NewNav from "../../components/newNav";
import { SSRProvider } from "react-bootstrap";

export default function Frontlayout({ children }) {
  // getLayout
  return (
    // <SSRProvider>

    <div style={{ fontFamily: "Montserrat" }}>
      <NewNav />
      <main>{children}</main>
    </div>
    // </SSRProvider>
  );
}
