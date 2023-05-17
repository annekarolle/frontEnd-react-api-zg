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
    justify-content: flex-start;
    width: 90%;
    margin-top: 5px;

}

p{
    font-size: small;
}

 `

 export const ContainerListRender = styled.div`

 width: 100%;
 align-items: left;
 display: flex;
 margin-top: 1em;
 padding-left: 10px;
 `