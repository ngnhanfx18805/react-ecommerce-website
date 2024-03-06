import React from "react";
import classes from "./OtherInformation.module.css";

const COtherInfomation = (param) => {
  return (
    <div className={classes.information1}>
      <p>{param?.nameContact || ""}</p>
      <p>{param?.nameContactDetail || ""}</p>
    </div>
  );
};

export default COtherInfomation;
