import './App.css';
import React, { useState } from 'react';


function App() {

  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  const handleSendClick = async () => {
    try {
      const response = await fetch('https://xjm9ps5e3e.execute-api.ap-south-1.amazonaws.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        setInputText('');
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Error sending message:', response.status);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network error, e.g., show a network error message to the user
    }
  };

  return (
    <div className="App">
        <div className='container'>
          <div className="bubble">
            <div class="header">
              <div class="pfp-container">
                <img class="pfp" src="https://firebasestorage.googleapis.com:443/v0/b/ask-fun-d10f0.appspot.com/o/images%2F00944962-1218-48D5-A2C1-43EC79409737.jpg?alt=media&amp;token=2934ab07-97c8-4291-a0a8-0cc6951bc92e" />
              </div><div class="user-container"><div class="username">@saurabh_47</div><div class="prompt">send me anonymous messages!</div>
              </div>
            </div>
            <div className="textarea-container">
              <textarea
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Send me anonymous messages...  &#10;(Mention your name if you want me to reply personally)"              
              />
            </div>
          </div>
          <button class="submit" type="submit" onClick={handleSendClick}>Send!</button>
        </div>
    </div>
  );
}

export default App;
