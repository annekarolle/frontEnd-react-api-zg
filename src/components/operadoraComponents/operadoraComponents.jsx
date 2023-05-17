// import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoadingComponent } from "../loadingComponents/loadingComponents";
import {AiFillPlusCircle} from "react-icons/ai"
import {BsFillTrash3Fill} from "react-icons/bs"
import { Container } from "./operadoraStyle"
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import operadoraService from '../../services/operadoraService';


export const OperatorComponent = () => {

    // const {operadoraList} = useContext(AuthContext);
    const { isLoadingContratos, setIsLoadingContratos,contratos, setContratos ,setOperadoraSelecionada, operadoraSelecionada, setOperadoras, operadoras, isLoadingOperadoras, setIsLoadingOperadoras, isClose, setIsClose , isOpen, setIsOpen} = useContext(AuthContext)
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [nomeOperadora, setNomeOperadora] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
      fetchOperadoras();
    }, []);

    useEffect(() => {
      if (erro) {
        alert(erro);
      }
    }, [erro]);

    const fetchOperadoras = async () => {
        try {
          const data = await operadoraService.getOperadoras();
          setOperadoras(data);
          setIsLoadingOperadoras(false);
        } catch (error) {
          console.error('Erro ao buscar exemplos:', error);
        }
    };

    const handleDeleteOperadora = async (operadoraId) => {
      const confirmDelete = window.confirm("Apagar a operadora junto com todos os documentos e regras?");
      if (confirmDelete) {
        await operadoraService.deleteOperadora(operadoraId);
        fetchOperadoras();
      }
    };

    const fetchContratosByOperadora = async (operadoraId) => {
      try {
        setIsLoadingContratos(true);
        const data = await operadoraService.getContratosByOperadora(operadoraId);
        setContratos(data);
        setIsLoadingContratos(false);
        fetchOperadoras();
      } catch (error) {
        console.error('Erro ao buscar contratos:', error);
      }
    };

    const handleOperadoraClick = (operadoraId) => {
       setOperadoraSelecionada(operadoraId);
       fetchContratosByOperadora(operadoraId);
       setIsOpen(true)
     };

     const handleOperadoraSubmit = async (event) => {
       event.preventDefault();
       if (nomeOperadora.trim() === '') {
          alert('O nome da operadora não pode ser vazio');
          return;
       }
       try {
        const novaOperadora = {nome: nomeOperadora.trim(), cliente: 'Cliente 1'}
        const data = await operadoraService.createOperadora(novaOperadora);
        setNomeOperadora('');
        setErro(null);
        fetchOperadoras()
        const operadoraId = data.id
        setOperadoraSelecionada(operadoraId)
        fetchContratosByOperadora(operadoraId);
      } catch (error) {
        if (error.response && error.response.data) {
          const erroDetail = Object.entries(error.response.data)
          .map(([key, value]) => `${key} -> ${value} `)
          .join('\n');
          setErro(erroDetail);
        } else {
          setErro('Erro ao criar operadora');
        }
      }
     };

    const handleNomeOperadoraChange = (event) => {
      setNomeOperadora(event.target.value);
    };

    return (
        <>
        <Container>
        <h3>Operadoras: </h3>
        {<form className="cadastroOperadora" onSubmit={handleOperadoraSubmit}>
          <input
            type="text"
            placeholder="Nome da operadora"
            value={nomeOperadora}
            onChange={handleNomeOperadoraChange}
          />
          <button type="submit"><AiFillPlusCircle/></button>
        </form>}
        {isLoadingOperadoras ? (
          <LoadingComponent/>
        ) : (
          <ul>
           {operadoras.map((operadora) => (
             <li key={operadora.nome}
             className={`operadora-item ${operadoraSelecionada == operadora.id ? 'selecionado' : 'nao-selecionado'}`}
             >
              <div className="operadora-button"
               onClick={() => { handleOperadoraClick(operadora.id); }}>
               {operadora.nome}
              </div>
              <button className="operadora-actions" onClick={() => handleDeleteOperadora(operadora.id)}>
                <BsFillTrash3Fill />
                </button>
              </li>
            ))}
          </ul>
        )}

        </Container>
        </>
    );
};
