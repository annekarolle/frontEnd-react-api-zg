import api from "../services/api";
import { createContext, useState } from "react";

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
  const [aditivoList, setAditivoList] = useState([]);
  const [rulesList, setRulesList] = useState([]);

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
    const formData = new FormData();
    formData.append("file", contractFile);

    api
      .post("URL_DO_SERVIDOR", formData)
      .then((response) => {})
      .catch((error) => {});
  };

  const handleContractChange = (event) => {
    const selectedFile = event.target.files[0];
    setContractFile(selectedFile);
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
