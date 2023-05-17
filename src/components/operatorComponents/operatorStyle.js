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

.cadastroOperadora {
  display: flex;
  width: 100%;
  margin-top: 1em;
  justify-content: space-between;
  gap: 4px;
}

.cadastroOperadora  input{
  background-color: var(--color-dark-grey);
  outline: 1px solid var(--color-light-grey);
  padding: 5px;
  color: var(--color-white);
  width: 90%;

}

.cadastroOperadora button{
  color: var(--color-green);
  font-size: 25px;

}

.cadastroOperadora button:hover{
  transform: scale(1.05)
}

.operadora-item {
  display: flex;
  align-items: center;
  /* padding: 5px; */

  border-bottom: 1px solid black;
}

.operadora-button {
  flex-grow: 1;
  display: flex;
  align-items: center;

}
.operadora-button:hover{
  cursor: pointer;
}

.operadora-name {
  flex-grow: 1;
}

li button {
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: var(--color-white);
  cursor: pointer;
}

li button:hover{
  color: var(--color-green)
}

.selecionado {
  font-weight: bold;
  background-color: var(--color-light-grey);
  color: var(--color-green);
  /* font-weight: 900; */
}

.nao-selecionado {
  background-color: var(--color-dark-grey);
  color: var(--color-white);
}


ul{
    list-style: none;
    text-align: left;
    overflow: auto;
    min-height: 600px;
    height: 700px;
    margin-top: 1em;
    /* overline: 1px solid var(--color-light-grey); */
}

li{
    padding: 5px;
    cursor:arrow;
}

/* ul li:nth-child(even) {
  background-color: var(--color-light-grey);
  color: var(--color-white);
}


ul li:nth-child(odd) {
  background-color: var(--color-dark-grey);
  color: var(--color-white);
} */

button{
    background-color: transparent;
    border: none;
    /* color: var(--color-white); */
}


li:hover{
    transform: scale(1.01);

}

button.active{
    color: var(--color-green);
    font-weight: 900;
}

`
