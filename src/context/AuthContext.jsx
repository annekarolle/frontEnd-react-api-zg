import api from "../services/api";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [operadoraList, setOperadoraList] = useState([]);
  const [selectOperadora, setSelectOperadora] = useState("");

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
        operadoraList,
        setSelectOperadora,
        selectOperadora,
        handleAditivoFileChange,
        handleAditivoFileSubmit,
        handleSubmitRules,
        handleRulesChange,
        handleContractSubmit,
        handleContractChange,  rules, setRules,  aditivoFile, setAditivoFile, contractFile, setContractFile,
        contractList, aditivoList, rulesList, setContractList, setAditivoList, setRulesList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
