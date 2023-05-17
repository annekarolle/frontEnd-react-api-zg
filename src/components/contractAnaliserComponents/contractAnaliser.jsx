import { useContext, useEffect, useState } from "react";
import { ContractContainer } from "./contractAnaliserStyle";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { SubmitComponents } from "../submitComponents/submitComponents";
import { RenderCard } from "../renderCard/renderCard";
import api from "../../services/api";

export const ContractAnaliser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const card = [
    { id: 1, nome: "Saúde Total" },
    { id: 2, nome: "Vida Plena" },
    { id: 3, nome: "Bem-Estar Seguro" },
    { id: 4, nome: "QualiVida" }
  ] 

  const {
    handleAditivoFileChange,
    handleAditivoFileSubmit,
    handleSubmitRules,
    handleRulesChange,
    handleContractSubmit,
    handleContractChange,
    rules, contractList, aditivoList, rulesList, setContractList, setAditivoList, setRulesList
  } = useContext(AuthContext);

  const handleToggle = () => {
    if (isOpen) {
      setIsClose(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClose(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  };
  const listContract = async () => {
    try {
      const response = await api.get('URL_DA_API/listContract');
      setContractList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const listAditivo = async () => {
    try {
      const response = await api.get('URL_DA_API/listContract');
      setAditivoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const listRules = async () => {
    try {
      const response = await api.get('URL_DA_API/listContract');
      setRulesList(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    listContract();
    listAditivo();
    listRules();
  }, []);

  return (
    <ContractContainer>
      {isOpen && (
        <div className={`overlay-container ${isClose ? "closing" : ""}`}>
          <div className="overlay-class-container">
            <SubmitComponents
              handleSubmit={handleContractSubmit}
              handleChange={handleContractChange}
              className="contrato"
              title= 'Contrato'
            >              
              <RenderCard list={card}/>
            </SubmitComponents>

            <SubmitComponents
              handleSubmit={handleAditivoFileSubmit}
              handleChange={handleAditivoFileChange}
              className="aditivo"
              title= 'Aditivo'
            >
               <RenderCard list={aditivoList}/>
            </SubmitComponents>

            <SubmitComponents
              handleSubmit={handleSubmitRules}
              handleChange={handleRulesChange}
              className="regras"
              rule={rules}
              title= 'Regras'
            >
              <RenderCard list={rulesList}/>
            </SubmitComponents>
          
          </div>

          <div className="close-button-container">
            <button onClick={handleToggle} className="close-button">
              <span>
                <BsArrowUpCircle />
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="open-button-container">
        <button onClick={handleToggle} className="open-button">
          <span>
            <BsArrowDownCircle />
          </span>
        </button>
      </div>
    </ContractContainer>
  );
};
