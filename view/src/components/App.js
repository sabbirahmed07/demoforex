import React from "react";
import Navbar from "./Layouts/Navbar";

export default function App(props) {
  // console.log(props);
  return (
    <div>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
}
