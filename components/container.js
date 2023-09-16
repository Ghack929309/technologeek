import React from "react";

const Container = (props) => {
  return (
    <div
      {...props}
      className={`container p-8 mx-auto xl:px-0 ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
