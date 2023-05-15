import { styled } from "styled-components";

export const ContractContainer = styled.div` 
 display: flex;
 flex-direction: row;
 width: 100%;
 span{
    font-size: 2em;
    color: var(--color-white);
 }


 .open-button-container{
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    justify-content: center;
 }

 

.overlay-class-container{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.overlay-container {
  position: fixed; 
  width: 80%;
  height: 300px;
  background-color: var(--color-dark);
  box-shadow: -1px 12px 7px -7px rgba(0,0,0,0.75);
  -webkit-box-shadow: -1px 12px 7px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 12px 7px -7px rgba(0,0,0,0.75);
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: openCloseAnimation 0.5s ease-in-out forwards; 
}

.close-button-container{
    display: flex;
    width: 100%;
    height: 10px;
    justify-content: center;  
    margin-bottom : 1em;
}

.overlay-container.open {
  animation: openCloseAnimation 0.5s ease-in-out reverse forwards;
}

@keyframes openCloseAnimation {
  0% {
    height: 0;
  }
  100% {
    height: 300px;
  }
}

.closing {
  animation: closeAnimation 0.5s ease-in-out forwards;
}

@keyframes closeAnimation {
  0% {
    height: 300px;
  }
  100% {
    height: 0;
  }
}



.close-button {  
animation: slideUpAnimation 0.5s ease-in-out forwards;
}

@keyframes slideUpAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}






`