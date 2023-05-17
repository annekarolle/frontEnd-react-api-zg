// import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoadingComponent } from "../loadingComponents/loadingComponents";

import { Container } from "./operatorStyle"
// import api from "../../services/api";
import { useContext } from "react";

export const OperatorComponent = () => {
    
    // const {operadoraList} = useContext(AuthContext);
    const { setSelectOperadora, selectOperadora} = useContext(AuthContext)


    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await api.get('URL_DA_API'); 
    //       setSelectOperadora(response.data);
    //     } catch (error) {
    //       console.error('Erro ao buscar os dados:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);

    // const planosDeSaude = [
    //     { nome: "Saúde Total" },
    //     { nome: "Vida Plena" },
    //     { nome: "Bem-Estar Seguro" },
    //     { nome: "QualiVida" },
    //     { nome: "VitalCare" },
    //     { nome: "Proteção Saúde" },
    //     { nome: "Saudix" },
    //     { nome: "CarePlus" },
    //     { nome: "Saudemed" },
    //     { nome: "Saúde Total" },
    //     { nome: "Vida Plena" },
    //     { nome: "Bem-Estar Seguro" },
    //     { nome: "QualiVida" },
    //     { nome: "VitalCare" },
    //     { nome: "Proteção Saúde" },
    //     { nome: "Saudix" },
    //     { nome: "CarePlus" },
    //     { nome: "Saudemed" },
    //     { nome: "Saúde Total" },
    //     { nome: "Vida Plena" },
    //     { nome: "Bem-Estar Seguro" },
    //     { nome: "QualiVida" },
    //     { nome: "VitalCare" },
    //     { nome: "Proteção Saúde" },
    //     { nome: "Saudix" },
    //     { nome: "CarePlus" },
    //     { nome: "Saudemed" },
    //     { nome: "Saúde Total" },
    //     { nome: "Vida Plena" },
    //     { nome: "Bem-Estar Seguro" },
    //     { nome: "QualiVida" },
    //     { nome: "VitalCare" },
    //     { nome: "Proteção Saúde" },
    //     { nome: "Saudix" },
    //     { nome: "CarePlus" },
    //     { nome: "Saudemed" },
    //     { nome: "Saúde Total" },
    //     { nome: "Vida Plena" },
    //     { nome: "Bem-Estar Seguro" },
    //     { nome: "QualiVida" },
    //     { nome: "VitalCare" },
    //     { nome: "Proteção Saúde" },
    //     { nome: "Saudix" },
    //     { nome: "CarePlus" },
    //     { nome: "Saudemed" },
    //     { nome: "PrevSaúde" }
    //   ];

    const planosDeSaude = false
    
    return (
        <>
        <Container>
        <h3>Operadoras:</h3>
      
        {planosDeSaude && planosDeSaude.length > 0 ? 
        (<ul>
         {planosDeSaude.map((operadora) => (
            <li key={operadora.nome}> 
            <button  onClick={() => {
                setSelectOperadora(operadora.nome); 
                console.log(selectOperadora)   
              }}>
            {operadora.nome}
            </button> </li>
          ))}          
        </ul>) : (
          <LoadingComponent/>
      )}   

        </Container>
        </>
    )
}