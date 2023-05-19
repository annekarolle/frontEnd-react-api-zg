import api from "../services/api";
import contratoService from "../services/contratoService";
import aditivoService from "../services/aditivoService";
import regraService from "../services/regraService";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [operadoras, setOperadoras] = useState([]);
  const [isLoadingOperadoras, setIsLoadingOperadoras] = useState(true);
  const [operadoraSelecionada, setOperadoraSelecionada] = useState("");

  const [contratos, setContratos] = useState([]);
  const [isLoadingContratos, setIsLoadingContratos] = useState(false);
  const [contractFile, setContractFile] = useState(null);
  const [rules, setRules] = useState("");
  const [aditivoFile, setAditivoFile] = useState(null);

  const [contractList , setContractList] = useState([]);
  const [contrato, setContrato] = useState([]);
  const [aditivoList, setAditivoList] = useState([]);
  const [rulesList, setRulesList] = useState([]);

  const [nomeArquivo, setNomeArquivo] = useState("");
  const [conteudo_base64, setConteudo_base64] = useState("");

  useEffect(() => {
    handleContractChange();
  }, [contrato]);

  useEffect(() => {
    fetchContratos();
    fetchAditivos();
    fetchRegras();
  }, [operadoraSelecionada]);

  const fetchContratos = async () => {
    if (operadoraSelecionada) {
      try {
        setIsLoadingContratos(true);
        const data = await contratoService.getAllByOperadora(operadoraSelecionada);
        setContratos(data);
        setIsLoadingContratos(false);
      } catch (error) {
        console.error('Erro ao buscar contratos:', error);
      }
    }
  };

  const fetchAditivos = async () => {
    if (operadoraSelecionada) {
      try {
        const data = await aditivoService.getAllByOperadora(operadoraSelecionada);
        setAditivoList(data);
      } catch (error) {
        console.error('Erro ao buscar aditivos:', error);
      }
    }
  };

  const fetchRegras = async () => {
    if (operadoraSelecionada) {
      try {
        const data = await regraService.getAllByOperadora(operadoraSelecionada);
        setRulesList(data);
      } catch (error) {
        console.error('Erro ao buscar regras:', error);
      }
    }
  };

  const handleAditivoFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setAditivoFile(selectedFile);
  };

  const handleAditivoFileSubmit = () => {
    const formData = new FormData();
    formData.append("file", aditivoFile);

    api
      .post("URL_DO_SERVIDOR_ADITIVO", formData)
      .then((response) => {})
      .catch((error) => {});
  };

  const handleSubmitRules = () => {
    api
      .post("URL_DA_API", { rules })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleRulesChange = (event) => {
    setRules(event.target.value);
  };

  const handleContractSubmit = () => {
    contratoService.create(contrato)
  };

  const handleContractChange = async () => {
    if (contrato) {
      try {
        const contratoSalvo = await contratoService.create(contrato);
        fetchContratos()
      } catch (error) {
        console.error('Erro ao salvar contratos:', error);
      }

    }
  };



  return (
    <AuthContext.Provider
      value={{
        operadoras,
        setOperadoras,
        isLoadingOperadoras, setIsLoadingOperadoras,
        setOperadoraSelecionada, operadoraSelecionada,
        contratos, setContratos,
        isLoadingContratos, setIsLoadingContratos,
        nomeArquivo, setNomeArquivo,
        conteudo_base64, setConteudo_base64,
        contrato, setContrato,
        handleAditivoFileChange,
        handleAditivoFileSubmit,
        handleSubmitRules,
        handleRulesChange,
        handleContractSubmit,
        handleContractChange,  rules, setRules,  aditivoFile, setAditivoFile, contractFile, setContractFile,
        aditivoList, rulesList, setAditivoList, setRulesList, isClose, setIsClose, isOpen, setIsOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
