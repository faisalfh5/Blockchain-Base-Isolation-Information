import React, { useState } from "react";
import "./chat.css"
import "./home.css"



function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

export default function Chat() {
  const [starterMessage, setStarterMessage] = useState("Welcome ! How I can Help You ?");
  const [time, setTime] = useState(getTime());
  const [botResponse, setBotResponse] = useState("Ask Your Question Now !");
  const [input,setInput] = useState("")
  const [chatHistory,setChatHistory] = useState("") 
  const [inputFinal,setInputFinal]=useState("Asking question ?")

  
//    setTimeout(() => {
//      setInputFinal(input)
//     }, 1000);
function message(){
    return setInputFinal(input)
}

  function firstBotMessage() {
    setStarterMessage("How's it going?");
    setTime(getTime());
  } 
  function inputValue (e){
   setInput(e.target.value)
  }
 console.log(input)

//   function getHardResponse(userText) {
//     setBotResponse(getBotResponse(userText));
//   }

//   function getResponse(input) {
//     // let userText = document.getElementById("textInput").value;

//     if (input === "") {
//       userText = "I love Code Palace!";
//     }

//     // setTimeout(() => {
//     //   getHardResponse(userText);
//     // }, 1000);
//   }
function getResponse(input){
    if (input === "rock") {
      return  setBotResponse("paper")
      } else if (input === "paper") {
      return  setBotResponse("scissor");
      } else if (input === "scissors") {
      return  setBotResponse("rock")
      }
    
      // Simple responses
      if (input === "hello") {
       return setBotResponse("hello there")
      } else if (input === "goodbye") {
       return setBotResponse("Talk to you Later !")
      } else {
        return setBotResponse("Try asking something else!");
      }
}
console.log('botrespone',botResponse,inputFinal)
  function buttonSendText(sampleText) {
    // setTimeout(() => {
    //   getHardResponse(sampleText);
    // }, 1000);
  }

  function sendButton() {
    getResponse(input);
    message(input)
    addToArray(inputFinal,botResponse)
  }
//  setTimeout(addToArray,3000)
  function addToArray(inputFinal,botResponse){
    setChatHistory([...chatHistory,inputFinal,botResponse])
  }
  function heartButton() {
    buttonSendText("Heart clicked!");
  }
console.log(chatHistory)
  return (
    <>
 

    <div style={{height:"500px",width:"300px",position:"absolute",bottom:"0px",right:"1%",background:"rgb(219 236 255)",padding:"10px 8px",borderRadius:"8px",overflow:"auto"}}>
     <div style={{position:"relative"}}>
      <div id="botStarterMessage">
        <p className="botText">
          <span style={{color:"#1ddfce", backgroundColor: "#001d39",marginLeft:"25px"}}>{starterMessage}</span>
        </p>
      </div>
      <div id="chat-timestamp"style={{color: "#001d39",padding:"10px",fontSize:"17px"}}>{time}</div>
      <div style={{paddingBottom:"80px"}} id="chatbox">
      {chatHistory ? chatHistory.map((item,i)=>{
      return  <p style={{marginTop:"5px"}} key={i}  className="botText">
          <span>{item}  <span style={{fontSize:"10px"}}> {time}</span></span>
        </p>
      }):""}
       
      </div>
      
    <div>
      
    </div>

    <div style={{position:"absolute",bottom:"0%",left:"50%",transform:"translateX(-50%)",}}>
        
   <form onSubmit={(e)=>e.preventDefault()}>
    <input onChange={inputValue}  type="text" id="textInput" style={{ color: "black",height:"20px",width:"250px"}}/>
    <button style={{color:"#1ddfce", backgroundColor: "#001d39"}} onClick={sendButton}>Send</button>
    
      </form>
      </div>
      </div>
    </div>
    </>
  );
}