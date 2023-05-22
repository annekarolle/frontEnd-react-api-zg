import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
box-shadow: 2px 9px 7px -3px rgba(0,0,0,0.32);
-webkit-box-shadow: 2px 9px 7px -3px rgba(0,0,0,0.32);
-moz-box-shadow: 2px 9px 7px -3px rgba(0,0,0,0.32);
background-color: var(--color-green4);
display: flex;


.navegador{
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 3vh;
align-content: center;
align-items: center;
margin: 1em 2em;

}


img{
    width: 10em;

}



    @media (max-width: 400px) {
        height: 10vh;

    .navegador{
        flex-direction: column;
    }

    img{
        width: 10em;
    }




}

`
