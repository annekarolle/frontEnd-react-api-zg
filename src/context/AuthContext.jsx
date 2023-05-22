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

  const [idContratoSelecionado, setIdContratoSelecionado] = useState("")

  const [contratos, setContratos] = useState([]);

  const [idContratoRemover, setIdContratoRemover] = useState("");
  const [idAditivoRemover, setIdAditivoRemover] = useState("");
  const [idRegraRemover, setIdRegraRemover] = useState("");


  const [isLoadingContratos, setIsLoadingContratos] = useState(false);
  const [contractFile, setContractFile] = useState(null);
  const [aditivoFile, setAditivoFile] = useState(null);

  const [contrato, setContrato] = useState({});
  const [aditivo, setAditivo] = useState({});
  const [regra, setRegra] = useState({});

  const [aditivos, setAditivos] = useState([]);
  const [regras, setRegras] = useState([]);

  const [nomeArquivo, setNomeArquivo] = useState("");
  const [conteudo_base64, setConteudo_base64] = useState("");
  const [descricaoRegra, setDescricaRegra] = useState("");

  useEffect(() => {
    if (Object.keys(contrato).length > 0) {
      salvarContrato();
    }
  }, [contrato]);

  useEffect(() => {
    if (Object.keys(aditivo).length > 0) {
      handleAditivoChange();
    }
  }, [aditivo]);

  useEffect(() => {
    if (Object.keys(regra).length > 0) {
      handleSubmitRegra();
    }
  }, [regra]);


  useEffect(() => {
    if (operadoraSelecionada) {
      fetchContratos();
      fetchAditivos();
      fetchRegras();
    }
  }, [operadoraSelecionada]);


  useEffect(() => {
    if (idContratoSelecionado) {
      fetchAditivosDoContrato();
      fetchRegrasDoContrato();
    }
  }, [idContratoSelecionado]);

  useEffect(() => {
    if (idContratoRemover) {
      removerContrato();
    }
  }, [idContratoRemover])

  useEffect(() => {
    if (idAditivoRemover) {
      removerAditivo();
    }
  }, [idAditivoRemover])

  useEffect(() => {
    if (idRegraRemover) {
      removerRegra();
    }
  }, [idRegraRemover])

  const fetchContratos = async () => {
    try {
      setIsLoadingContratos(true);
      const data = await contratoService.getAllByOperadora(operadoraSelecionada);
      setContratos(data);
      setIdContratoSelecionado(null);
      setIsLoadingContratos(false);
    } catch (error) {
      console.error('Erro ao buscar contratos:', error);
    }
  };


  const fetchAditivosDoContrato = async () => {
    try {
      const data = await aditivoService.getAllByContrato(idContratoSelecionado);
      setAditivos(data);
    } catch (error) {
      console.error('Erro ao buscar aditivos do contrato:', error);
    }
  };

  const fetchRegrasDoContrato = async () => {
    try {
      const data = await regraService.getAllByContrato(idContratoSelecionado);
      setRegras(data);
    } catch (error) {
      console.error('Erro ao buscar regras do contrato:', error);
    }
  };

  const fetchAditivos = async () => {
    if (operadoraSelecionada) {
      try {
        const data = await aditivoService.getAllByOperadora(operadoraSelecionada);
        setAditivos(data);
      } catch (error) {
        console.error('Erro ao buscar aditivos:', error);
      }
    }
  };

  const fetchRegras = async () => {
    if (operadoraSelecionada) {
      try {
        const data = await regraService.getAllByOperadora(operadoraSelecionada);
        setRegras(data);
      } catch (error) {
        console.error('Erro ao buscar regras:', error);
      }
    }
  };

  const handleAditivoFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setAditivoFile(selectedFile);
  };


  const salvarContrato = async () => {
    try {
      const contratoSalvo = await contratoService.create(contrato);
      await fetchContratos()
      setIdContratoSelecionado(contratoSalvo.id)
    } catch (error) {
      console.error('Erro ao salvar contrato:', error);
    }
  };

  const handleAditivoChange = async () => {
    try {
      const aditivoSalvo = await aditivoService.create(aditivo);
      fetchAditivos()
    } catch (error) {
      console.error('Erro ao salvar aditivo:', error);
    }
  };

  const handleSubmitRegra = async () => {
    try {
      const regraSalva = await regraService.create(regra);
      if (idContratoSelecionado) {
        fetchRegrasDoContrato()
      } else {
        fetchRegras()
      }
    } catch (error) {
      console.error('Erro ao salvar regra:', error);
    }
  };

  const removerContrato = async () => {
    try {
      await contratoService.delete(idContratoRemover);
      fetchContratos()
      if (idContratoSelecionado === idContratoRemover) {
        fetchAditivos()
        fetchRegras()
        setIdContratoSelecionado(null)
      }
    } catch (error) {
      console.error('Erro ao remover contrato:', error);
    }
  };


  const removerAditivo = async () => {
    try {
      await aditivoService.delete(idAditivoRemover);
      fetchAditivos()
    } catch (error) {
      console.error('Erro ao remover aditivo:', error);
    }
  };


  const removerRegra = async () => {
    try {
      await regraService.delete(idRegraRemover);
      fetchRegras()
    } catch (error) {
      console.error('Erro ao remover regra:', error);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        operadoras,
        setOperadoras,
        isLoadingOperadoras, setIsLoadingOperadoras,
        setOperadoraSelecionada, operadoraSelecionada,
        idContratoSelecionado, setIdContratoSelecionado,
        contratos, setContratos,
        isLoadingContratos, setIsLoadingContratos,
        nomeArquivo, setNomeArquivo,
        conteudo_base64, setConteudo_base64,
        contrato, setContrato,
        aditivo, setAditivo,
        handleAditivoFileChange,
        handleSubmitRegra,
        idContratoRemover, setIdContratoRemover,
        idAditivoRemover, setIdAditivoRemover,
        idRegraRemover, setIdRegraRemover,
        salvarContrato, handleAditivoChange,
        regras, setRegras,
        regra, setRegra,
        descricaoRegra, setDescricaRegra,
        aditivoFile, setAditivoFile, contractFile, setContractFile,
        aditivos, setAditivos, isClose, setIsClose, isOpen, setIsOpen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
