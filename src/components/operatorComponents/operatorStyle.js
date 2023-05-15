import styled from "styled-components";


export const Container = styled.div`
padding:1em;
width: 15%;
height: 100%;
border: 2px solid var(--color-light-grey);
box-shadow: 0px 0px 2px rgba(0, 0, 0, 1), 0px 2px 4px rgba(0, 0, 0, 1) inset;
background-color: var(--color-grey);
text-align: left;



::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--color-dark-grey);
      border-radius: 0.3rem;
      
}

::-webkit-scrollbar-thumb {
    background: var(--color-grey);
    border-radius: 0.3rem;
    border: 1px solid var(--color-green);
  
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-light-grey);
}

ul{
    list-style: none;
    text-align: left;
    margin-top: 1em;
    overflow: auto;
    min-height: 600px;
    height: 700px;

}

li{
    margin-top: 1em;
}

button{
    background-color: transparent;
    border: none;
    color: var(--color-white);
}


button:hover{
    color: var(--color-green)
}

button:active{
    color: var(--color-green);
    font-weight: 900;
}

`