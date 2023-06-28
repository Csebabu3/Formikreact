import React from "react";
import './Style.css';

class Popup extends React.Component {
  render() {
    return (
      <div className="Popup">
        <div className="Popup-inner">
          <h1 className="close">X</h1>
          <br />
          <br />
          <center>
            <span className="tick">&#10003;</span>
          </center>
          <h2 className="text2">You have<br />successfully signed up</h2>
        </div>
      </div>
    );
  }
}

export default Popup;
