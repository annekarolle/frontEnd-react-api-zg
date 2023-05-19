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

 .class-container h3{
  margin: 0;
 }

 .container-input-button{
  display: flex;
  flex-direction: row;

 }

.class-container.contrato,  .class-container.aditivo{
  display: flex;
  align-items: center;
  flex-direction: column;


}

.container-intermediario{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
}

 .class-container.contrato form,  .class-container.aditivo form{
  display: flex;
  width: 90%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1em;
}

 .class-container.contrato input,  .class-container.aditivo input{
display: none;
 }


 .class-container.regras{
    align-items: left;
    text-align: left;

 }
 .class-container.regras form{
  display: flex;
  width: 100%;
  justify-content: center;
 }

 .class-container.regras h3{
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 0;
 }
 .class-container.regras input{
  background-color: var(--color-dark-grey);
  outline: 1px solid var(--color-light-grey);
  padding: 5px;
  color: var(--color-white);
  width: 80%;
 }

 .class-container.regras button, label, .class-container.contrato button, label, .class-container.aditivo button{
  color: var(--color-green);
  font-size: 25px;
  cursor: pointer;
 }

 .class-container.contrato button:hover, label:hover,  .class-container.aditivo button:hover, label:hover{
    transform: scale(1.05);
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
