import { styled } from "styled-components";

export const Container = styled.div`

margin-bottom: 2em;
 display: flex;
 flex-direction: row;
 width: 100%;

.class-container{
    width: 100%;
    height: 200px;
    gap: 1em;
    border: 2px solid var(--color-light-grey);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 1), 0px 2px 4px rgba(0, 0, 0, 1) inset;
    margin: 1em;
    overflow: auto;

 }




.class-container.contrato,  .class-container.aditivo,  .class-container.regra {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container-intermediario{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
}

.add-button {
  color: var(--color-green);
}

 .class-container.contrato form,  .class-container.aditivo form,  .class-container.regra form{
  display: flex;
  width: 90%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

 .class-container.contrato input,  .class-container.aditivo input{
   display: none;
 }

 .class-container.regra input{
  background-color: var(--color-dark-grey);
  outline: 1px solid var(--color-light-grey);
  padding: 5px;
  flex-grow: 1;
  flex-basis: 0;
  margin-left: 10px;
  margin-right: 10px;
  color: var(--color-white);
 }

 .class-container.contrato li:hover {
     transform: scale(1.03);
     cursor: pointer;
 }

 .class-container.regra label, .class-container.contrato label, .class-container.aditivo label{
  color: var(--color-green);
  font-size: 25px;
  cursor: pointer;
 }

label:hover{
    transform: scale(1.05);
    cursor: pointer;
 }

 .selecionado {
   font-weight: bold;
   background-color: var(--color-grey);
   color: var(--color-green);
   /* font-weight: 900; */
 }

 .class-container::-webkit-scrollbar {
  width: 10px;
}

.class-container::-webkit-scrollbar-track {
    background: var(--color-dark-grey);
      border-radius: 0.3rem;

}

.class-container::-webkit-scrollbar-thumb {
    background: var(--color-grey);
    border-radius: 0.3rem;
    border: 1px solid var(--color-green);

}

.class-container::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-light-grey);
}


.container-file-send{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;

}

.container-file-send p{
  font-size: 10px;
  align-items: center;

}

.container-rules-send{
    display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 1em;
  align-items: center;
}




ul{
  display: flex;
  width: 100%;
  align-items: left;
}


h4{
  color: var(--color-green);
}


.lista-cotainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin:0;

}


`
