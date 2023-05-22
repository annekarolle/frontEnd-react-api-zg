import { useContext } from "react";
import { ContractContainer } from "./contractAnaliserStyle";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { SubmitComponents } from "../submitComponents/submitComponents";
import { RenderCard } from "../renderCard/renderCard";


export const ContractAnaliser = () => {

  const {
    isClose, setIsClose, isOpen, setIsOpen,
    setContrato, setAditivo, setRegra,
    setIdContratoRemover, setIdAditivoRemover, setIdRegraRemover,
    idContratoSelecionado, setIdContratoSelecionado,
    contratos, aditivos, regras,
    descricaoRegra, setDescricaRegra,
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
    const file = event.target.files[0];
    if (file) {
      return new Promise((resolve, reject) => {
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
    }
  };

  const salvarContrato = async (event) => {
    const arquivoMontado = await montarArquivo(event);
    if (!operadoraSelecionada) {
      alert("Selecione uma operadora para cadastrar um contrato associado a ela")
      return;
    }
    if (arquivoMontado) {
      const contratoParaSalvar = {cliente: 'Cliente 1',
                  operadora: operadoraSelecionada,
                  arquivo: arquivoMontado};
      setContrato(contratoParaSalvar);
    }
  };


  const salvarAditivo = async (event) => {
    const arquivoMontado = await montarArquivo(event);
    if (!idContratoSelecionado) {
      alert("Selecione um contrato para salvar um aditivo assciado a ele")
      return
    }
    if (arquivoMontado) {
      const aditivoParaSalvar = { contrato: idContratoSelecionado,
                                  arquivo: arquivoMontado};
      setAditivo(aditivoParaSalvar);
    }
  };

  const salvarRegra = async (event) => {
    event.preventDefault();
    console.log(descricaoRegra)
    if (!descricaoRegra) {
      alert('A regra não pode ser vazia');
      return;
    }
    if (!idContratoSelecionado) {
      alert('Selecione um contrato para salvar uma regra associada a ele');
      return;
    }
    setRegra({descricao: descricaoRegra, contrato: idContratoSelecionado});
  };

  const handleInputChangeRegra = (event) => {
    let novaDescricao = event.target.value
    novaDescricao = novaDescricao ? novaDescricao.trim() : '';
    setDescricaRegra(novaDescricao);
  }

  const deletarContrato = async (contratoId) => {
    const confirmDelete = window.confirm("Apagar o contrato junto com todos os aditivos e regras?");
    if (confirmDelete) {
      setIdContratoRemover(contratoId)
    }
  }

  const deletarAditivo = async (aditivoId) => {
    setIdAditivoRemover(aditivoId)
  }

  const deletarRegra = async (regraID) => {
    setIdRegraRemover(regraID)
  }

  const selecionarContrato = (contratoId) => {
    setIdContratoSelecionado(contratoId);
  }

const selecionarNada = (nada) => {
}


  return (
    <ContractContainer>
      {isOpen && (
        <div className={`overlay-container ${isClose ? "closing" : ""}`}>
          <div className="overlay-class-container">
            <SubmitComponents
              handleInputChange={salvarContrato}
              className="contrato"
              title= 'Contratos'
            >
              <RenderCard list={contratos} handleDelete={deletarContrato} selecionarItem={selecionarContrato}/>
            </SubmitComponents>

            <SubmitComponents
              handleInputChange={salvarAditivo}
              className="aditivo"
              title= 'Aditivos'
            >
               <RenderCard list={aditivos} handleDelete={deletarAditivo} selecionarItem={selecionarNada}/>
            </SubmitComponents>

            <SubmitComponents
              handleSubmit={salvarRegra}
              handleInputChange={handleInputChangeRegra}
              className="regra"
              title= 'Regras'
            >
              <RenderCard list={regras}  handleDelete={deletarRegra} selecionarItem={selecionarNada}/>
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
