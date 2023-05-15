import styled from "styled-components";


export const Container = styled.div`

width: 80vw;
height: 100%;
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
justify-content: center;

.message-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    overflow: auto;
    width: 100%;
}

.message-container::-webkit-scrollbar {
  width: 10px;
}

.message-container::-webkit-scrollbar-track {
    background: var(--color-dark-grey);
      border-radius: 0.3rem;
      
}

.message-container::-webkit-scrollbar-thumb {
    background: var(--color-grey);
    border-radius: 0.3rem;
    border: 1px solid var(--color-green);
  
}

.message-container::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-light-grey);
}


ul{
    list-style: none;
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
}

.message-send{
    padding: 1em;
    background-color: var(--color-grey);
    /* border-radius: 114px 116px 0px 132px;
-webkit-border-radius: 114px 116px 0px 132px;
-moz-border-radius: 114px 116px 0px 132px;
 */
margin-bottom: 1em;
width: 100%;
display: flex;
justify-content: flex-end;

}

.message-answer{
    padding: 1em;
    background-color: var(--color-dark-grey);
    /* border-radius: 114px 116px 131px 0px;
-webkit-border-radius: 114px 116px 131px 0px;
-moz-border-radius: 114px 116px 131px 0px; */
margin-bottom: 1em;
width: 100%;
display: flex;
justify-content: flex-start;
}

textarea{
    width: 80%;
    min-width: 800px;
    max-width: 1000px;
    padding: 5px;
    max-height: 200px; 
    min-height: 100px;
    height  : 100px;
    padding: 10px;
    background-color: var(--color-dark);
    border: 2px solid var(--color-green);
    color: var(--color-white);    
}


textarea::-webkit-scrollbar {
  width: 10px;
}

textarea::-webkit-scrollbar-track {
    background: var(--color-dark-grey);
      border-radius: 0.3rem;
      
}

textarea::-webkit-scrollbar-thumb {
    background: var(--color-grey);
    border-radius: 0.3rem;
    border: 1px solid var(--color-green);
  
}

textarea::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-light-grey);
}

button{
    background-color: transparent;
    border: none;   
    color: var(--color-green);
    font-size: 1em;
    padding-left: 0.5em;

}

button:hover{
    transform: scale(1.08); 
}

form{
    margin-top: 1em;
}


`    

   
