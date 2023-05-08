import React, { useState } from "react";
import "./Chatbot.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentsO, faSend } from "@fortawesome/free-solid-svg-icons";

function Chatbot() {
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    // Add code to handle sending of text message
  };

  return (
    <div className="chat-bar-collapsible">
      <button id="chat-button" type="button" className="collapsible" onClick={() => setOpen(!isOpen)}>
        Chat with us!
        <FontAwesomeIcon id="chat-icon" style={{ color: "#fff" }} icon={faCommentsO} />
      </button>
      {isOpen && (
        <div className="content">
          <div className="full-chat-block">
            <div className="outer-container">
              <div className="chat-container">
                <div id="chatbox">
                  <h5 id="chat-timestamp">{new Date().toLocaleString()}</h5>
                  <p id="botStarterMessage" className="botText">
                    <span>Loading...</span>
                  </p>
                </div>
                <div className="chat-bar-input-block">
                  <div id="userInput">
                    <input
                      id="textInput"
                      className="input-box"
                      type="text"
                      name="msg"
                      placeholder="Tap 'Enter' to send a message"
                      value={text}
                      onChange={handleTextChange}
                    />
                  </div>
                  <div className="chat-bar-icons">
                    <FontAwesomeIcon id="chat-icon" style={{ color: "crimson" }} icon={faHeart} />
                    <FontAwesomeIcon id="chat-icon" style={{ color: "#333" }} icon={faSend} onClick={handleSend} />
                  </div>
                </div>
                <div id="chat-bar-bottom">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
