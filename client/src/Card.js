import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import profilePlaceholderImg from "./images/profilePlaceholder.png";

function Card() {
    const [inputText, setInputText] = useState('');
    const navigate = useNavigate();

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
                navigate("./sent");
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

    return (<div className='container'>
        <div className="bubble">
            <div class="header">
                <div class="pfp-container">
                    <img class="pfp" src={profilePlaceholderImg} />
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
    </div>);
}

export default Card;
