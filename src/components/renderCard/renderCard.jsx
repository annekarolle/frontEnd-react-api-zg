import { ListStyle } from "./renderCardStyle"



export const RenderCard = ({ list }) =>{   

    return (
        <ListStyle>
      {list.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ListStyle>
    )
}