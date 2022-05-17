import React from "react";
import "../styles.css/button.css";

function Button({ texto, buttonClic, doClic }) {
  return (
    <>
      <button
        className={buttonClic ? "button-clic" : "button-restart"}
        onClick={doClic}
      >
        {texto}
      </button>
    </>
  );
}

export default Button;
