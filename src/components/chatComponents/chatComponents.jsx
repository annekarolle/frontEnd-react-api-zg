import React, { useState } from 'react';
import { Container } from './chatStyle';
import {FiSend} from "react-icons/fi"
import { ContractAnaliser } from '../contractAnaliserComponents/contractAnaliser';

const ChatComponent = () => {
  const [mensagemEscrita, setMensagemEscrita] = useState("");
  const [mensagens] = useState([]);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ContractAnaliser/>
      <div className='message-container'>
        <ul className="message">
          {mensagens ? mensagens.map((index, mensagem, papel) => (
            <li key={index} className={`message-${papel}`}>{mensagem}</li>
          )) : ('')}
        </ul>
      </div>
      <form onSubmit={handleMessageSubmit}>
        <textarea value={mensagemEscrita} onChange={(e) => setMensagemEscrita(e.target.value)} />
        <button type="submit"><FiSend/></button>
      </form>
    </Container>
  );
};

export default ChatComponent;
