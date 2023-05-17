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

 .class-container.contrato input,  .class-container.aditivo input{
display: none;
 }

 .class-container.contrato label,  .class-container.aditivo label{
  padding: 5px;    
  color: var(--color-white);  
    background-color :var(--color-light-grey); 
    border: 2px solid var(--color-light-grey);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 1), 0px 2px 4px rgba(0, 0, 0, 1) inset;
    text-align: center;   
    margin-top: 5px;
    cursor: pointer;
 }

 .class-container.regras input{
  padding: 10px;    
  color: var(--color-white);  
    background-color :var(--color-light-grey); 
    border: 2px solid var(--color-light-grey);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 1), 0px 2px 4px rgba(0, 0, 0, 1) inset;
    text-align: left;   
    margin-top: 5px;   
 }

 .class-container.contrato label:hover,  .class-container.aditivo label:hover{
  padding: 5px;    
  color: var(--color-white);  
    background-color :var(--color-grey); 
    border: 2px solid var(--color-grey);    
    text-align: center;   
    margin-top: 5px;
    cursor: pointer;
 }

 .class-container.contrato button,  .class-container.aditivo button{
  padding: 5px;    
    color: var(--color-green);  
   
    text-align: center;   
    margin-top: 5px;
    cursor: pointer;
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


.class-container h3{
margin-top: 0.5em;
}


.container-file-send{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 1em;
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

li{
text-align: left;
}

h4{
  color: var(--color-green);
}


.lista-cotainer{
  display: flex;
  flex-direction: column;
  align-items: left;
  align-items: flex-start;
  width: 100%;
  
}

.lista-cotainer h4{
  padding-left: 10px;
}
`
 
