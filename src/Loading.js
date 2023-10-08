import React from "react";
import "./style.css";
import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="Oval">
      <Oval
        height={100}
        width={100}
        color="#5F9EA0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#7BA6B1"
        strokeWidth={2}
        strokeWidthSecondary={2}
        className="Oval"
      />
    </div>
  );
}
