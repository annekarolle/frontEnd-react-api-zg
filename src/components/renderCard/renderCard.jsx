import { LoadingWord } from "../loadingWord/loadingWord"
import { ContainerListRender, ListStyle } from "./renderCardStyle"
import {BsFillTrash3Fill} from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";




export const RenderCard = ({ list, handleDelete, selecionarItem}) =>{

  const {
    idContratoSelecionado
  } = useContext(AuthContext);

  return (
    <ContainerListRender>
      {list ? (
        <ListStyle>
          {list.map((item) => (
            <li key={item.id}
                onClick={() => { selecionarItem(item.id); }}
                className={item.id === idContratoSelecionado ? 'selecionado' : 'nao-selecionado'}>
              <p>{item.arquivo ? item.arquivo.nome : item.descricao}</p>
              <button className="botao-apagar"
                      onClick={() => { handleDelete(item.id); }}>
                <BsFillTrash3Fill/>
              </button>
            </li>
          ))}
        </ListStyle>
      ) : (
        <div className="loadingWord">
          <LoadingWord size="8px" word={`Carregando lista...`} />
        </div>
      )}
    </ContainerListRender>
  );
};
