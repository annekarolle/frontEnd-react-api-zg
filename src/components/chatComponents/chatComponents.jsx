import React, { useState } from 'react';
import { Container } from './chatStyle';
import {FiSend} from "react-icons/fi"
import { ContractAnaliser } from '../contractAnaliserComponents/contractAnaliser';

import axios from 'axios';

const ChatComponent = () => {
  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState([]);

  const handleMessageSubmit = async (e) => {

    e.preventDefault();
    setQuestion([...question, question]);
    try {
      const response = await axios.get('sua_api_aqui');
      const newAnswer = response.data.answer;      
      setAnswer([...answer, newAnswer]);
      setQuestion('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <ContractAnaliser/>
      <div className='message-container'>  
        <ul className="message">
          {question.map((message, index) => (
            <li key={index} className="message-send">{message}</li>
          ))}
        </ul>
        <ul className="message">
          {answer.map((message, index) => (
            <li key={index} className="message-answer">{message}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleMessageSubmit}>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button type="submit"><FiSend/></button>
      </form>
    </Container>
  );
};

export default ChatComponent;