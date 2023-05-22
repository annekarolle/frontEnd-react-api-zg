import { styled } from "styled-components";


export const ContainerListRender = styled.div`
width: 100%;
align-items: center;
display: flex;
justify-content: center;
`

export const ListStyle = styled.ul`
display: flex;
list-style: none;
align-items: center;
text-align: left;
flex-direction: column;
padding: 0;

li{
    align-items: left;
    text-align: left;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid black;
    align-items: center;
}

p {
    font-size: 13px;
    text-align:left;
}



.botao-apagar {
  color: var(--color-white);
  cursor: pointer;
  font-size: 12px;
  margin-top: 5px;
}

button:hover{
  color: var(--color-green)
}

 `
