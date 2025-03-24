import { use, useState } from "react";
import "./App.css";
import { addOneUser, toggleOneUserOnline } from "./actions/allUserActions";
import { useSelector } from "react-redux";
import { addOneMessage } from "./actions/allMessageActions";

function App() {
  const [count, setCount] = useState(0);
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState("");
  const [sender, setSender] = useState("abhinav");

  const state = useSelector((state) => state);
  const allUsers = Object.keys(useSelector((state) => state.allUsers.data));
  const allMessages =
    useSelector((state) => state.allMessages.data[`${sender}:${receiver}`]) ||
    [];

  const handleEmailChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleSubmit = () => {
    addOneUser(emailId);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    addOneMessage(sender, receiver, message);
    console.log(allMessages);
    setMessage("");
  };

  return (
    <div className='compWrap'>
      <div className='leftPane'>
        <input
          value={emailId}
          onChange={handleEmailChange}
          name='email'
          type='email'
        />
        <button onClick={handleSubmit}>Add user</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {allUsers.map((e, i) => (
          <button
            key={i}
            onClick={() => {
              setReceiver(e);
            }}
          >
            {e}
          </button>
        ))}
      </div>
      <div className='centerPane'>
        <p>{receiver}</p>
        <p>
          {sender} is {state.allUsers.data[sender]?.online || false ? "online" : "offline"}
        </p>
        <button
          onClick={() => {
            toggleOneUserOnline(sender);
          }}
        ></button>
        <input
          value={message}
          onChange={handleMessageChange}
          name='message'
          type='text'
        />
        <button onClick={handleSendMessage}>Add message</button>
        {allMessages.length > 0 &&
          allMessages.map((e, i) => <p key={i}>{e}</p>)}
      </div>
    </div>
  );
}

export default App;
