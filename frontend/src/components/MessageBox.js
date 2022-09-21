import React from "react";

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "info"} p-2`}>
      {props.children}
    </div>
  );
}
