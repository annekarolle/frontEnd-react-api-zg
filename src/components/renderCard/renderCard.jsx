import { LoadingWord } from "../loadingWord/loadingWord"
import { ContainerListRender, ListStyle } from "./renderCardStyle"



export const RenderCard = ({ list }) =>{   

  return (
    <ContainerListRender className="container-list-render">
      {list && list.length > 0 ? (
        <ListStyle>
          {list.map((item) => (
            <li key={item.id}>
              <p>{item.nome}</p>
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


