import { LoadingWord } from "../loadingWord/loadingWord"
import { ContainerListRender, ListStyle } from "./renderCardStyle"
import {BsFillTrash3Fill} from "react-icons/bs"





export const RenderCard = ({ list }) =>{

  return (
    <ContainerListRender className="container-list-render">
      {list ? (
        <ListStyle>
          {list.map((item) => (
            <li key={item.id}>
              <p>{item.arquivo.nome}</p>
              <button

                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <BsFillTrash3Fill className="botao-apagar"/>
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
