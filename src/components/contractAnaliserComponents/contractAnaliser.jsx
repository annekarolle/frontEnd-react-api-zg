import { useContext, useEffect, useState } from "react";
import { ContractContainer } from "./contractAnaliserStyle";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { SubmitComponents } from "../submitComponents/submitComponents";
import { RenderCard } from "../renderCard/renderCard";
import api from "../../services/api";

export const ContractAnaliser = () => {


  const card = [
    { id: 1, nome: "Saúde Total" },
    { id: 2, nome: "Vida Plena" },
    { id: 3, nome: "Bem-Estar Seguro" },
    { id: 4, nome: "QualiVida" }
  ]

  const {
    isClose, setIsClose, isOpen, setIsOpen,
    handleAditivoFileChange,
    handleAditivoFileSubmit,
    handleSubmitRules,
    handleRulesChange,
    handleContractSubmit,
    handleContractChange,
    isLoadingContratos, setIsLoadingContratos,
    rules, contratos, aditivoList, rulesList, setContratos, setAditivoList, setRulesList
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
      const response = await api.get('contratos/');
      setContratos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const listAditivo = async () => {
    try {
      const response = await api.get('aditivos/');
      setAditivoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const listRules = async () => {
    try {
      const response = await api.get('regras/');
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
              title= 'Contratos'
            >
              <RenderCard list={contratos}/>
            </SubmitComponents>

            <SubmitComponents
              handleSubmit={handleAditivoFileSubmit}
              handleChange={handleAditivoFileChange}
              className="aditivo"
              title= 'Aditivos'
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
