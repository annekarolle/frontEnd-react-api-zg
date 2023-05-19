import { styled } from "styled-components";

export const ListStyle = styled.ul`
display: flex;
width: 90%;
list-style: none;
align-items: left;
text-align: left;
flex-direction: column;

li{
    align-items: left;
    text-align: left;
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 30%;
    margin-top: 5px;
    border-bottom: 1px solid black;

}

p{
    font-size: small;
    display: flex;
    align-items: center;

}

.botao-apagar {
  padding: 1px;
  width: 100%;
  height: 100%;
}

 `

 export const ContainerListRender = styled.div`

 width: 100%;
 align-items: left;
 display: flex;
 margin-top: 1em;
 padding-left: 10px;
 `
