import { useState } from "react";
import { Container } from "./submitComponentsStyle";
import { AiFillCloseCircle } from "react-icons/ai";

export const SubmitComponents = ({
  handleSubmit,
  handleChange,
  children,
  className,
  rules,
  title
  
}) => {
  const [fileName, setFileName] = useState("");
  const [ruleName, setRuleName] = useState("");

  return (
    <>
      <Container className="class-container">
        <div className={`class-container ${className}`}>
          <h3>{title}</h3>
         
          {className === "regras" ? (
            <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={rules} onChange={ (event) => {handleChange(event); setRuleName(event.target.value)}} />
              <button  type="submit">Enviar</button>

              <div className="container-rules-send">
                {ruleName ? (
                  <>
                    <p>{ruleName}</p>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setRuleName("");                        
                      }}
                    >
                      <AiFillCloseCircle />
                    </button>
                  </>
                ) : null}
              </div>
            </form>          
             

            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor={className}>Selecionar {className}</label>
              <input
                type="file"
                name={className}
                id={className}
                onChange={(event) => {
                handleChange(event);
                setFileName(event.target.value);
                }}
              />
              <button type="submit">Enviar</button>
              <div className="container-file-send">
                {fileName ? (
                  <>
                    <p>{fileName}</p>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setFileName("");
                      }}
                    >
                      <AiFillCloseCircle />
                    </button>
                  </>
                ) : null}
              </div>
            </form>
            
          )} 
          <div className="lista-cotainer">
          <h4>Lista de {title}</h4>
           {children}
          </div> 
               
        </div>
      </Container>
    </>
  );
};
