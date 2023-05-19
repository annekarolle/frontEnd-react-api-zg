import { useContext, useEffect, useState } from "react";
import { ContractContainer } from "./contractAnaliserStyle";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { SubmitComponents } from "../submitComponents/submitComponents";
import { RenderCard } from "../renderCard/renderCard";
import api from "../../services/api";
import contratoService from '../../services/contratoService';
import aditivoService from '../../services/aditivoService';
import regraService from '../../services/regraService';


export const ContractAnaliser = () => {

  const {
    isClose, setIsClose, isOpen, setIsOpen,
    handleAditivoFileChange,
    handleAditivoFileSubmit,
    handleSubmitRules,
    handleRulesChange,
    handleContractSubmit,
    handleContractChange,
    contrato, setContrato,
    nomeArquivo, setNomeArquivo, conteudo_base64, setConteudo_base64,
    arquivo, setArquivo,
    isLoadingContratos, setIsLoadingContratos,
    rules, contratos, aditivoList, rulesList, setContratos, setAditivoList, setRulesList,
    operadoraSelecionada
  } = useContext(AuthContext);

  const handleCloseToggle = () => {
    setIsClose(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClose(false);
    }, 500);
  };

  const handleOpenToggle = () => {
    setIsOpen(true);
  };


  const montarArquivo = (event) => {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      const nomeArquivo = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        const base64Content = btoa(fileContent);
        const arquivo = { nome: nomeArquivo, conteudo_base64: base64Content, tipo: 'ignorar' };
        resolve(arquivo);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsBinaryString(file);
    });
  };

  const montarContrato = async (event) => {
    const arquivoMontado = await montarArquivo(event);
    if (arquivoMontado) {
      const contratoParaSalvar = {cliente: 'Cliente 1',
                  operadora: operadoraSelecionada,
                  arquivo: arquivoMontado};
      setContrato(contratoParaSalvar);
    }
  };


  return (
    <ContractContainer>
      {isOpen && (
        <div className={`overlay-container ${isClose ? "closing" : ""}`}>
          <div className="overlay-class-container">
            <SubmitComponents
              handleSubmit={handleContractSubmit}
              handleChange={handleContractChange}
              handleFileChange={montarContrato}
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
            <button onClick={handleCloseToggle} className="close-button">
              <span>
                <BsArrowUpCircle />
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="open-button-container">
        <button onClick={handleOpenToggle} className="open-button">
          <span>
            <BsArrowDownCircle />
          </span>
        </button>
      </div>
    </ContractContainer>
  );
};
