import { useState } from "react";
import { Container } from "./submitComponentsStyle";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import {BsFillArrowRightCircleFill} from "react-icons/bs"

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
        {className === "regras" ? (
          <div className={`class-container ${className}`}>
           
            <form onSubmit={handleSubmit}>
            <h3>{title}</h3>
              <input
                type="text"
                value={rules}
                onChange={(event) => {
                  handleChange(event);
                  setRuleName(event.target.value);
                }}
              />
              <button type="submit">
                <AiFillPlusCircle />
              </button>
            </form>
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
          </div>
        ) : (
         <>
          <div className={`class-container ${className}`}>
            
                    <form onSubmit={handleSubmit}>
                          <h3>{title}</h3>        
                     <div className="container-intermediario">
                     <label htmlFor={className}><AiFillPlusCircle/></label>
                        <input
                          type="file"
                          name={className}
                          id={className}
                          onChange={(event) => {
                            handleChange(event);
                            setFileName(event.target.value);
                          }}                                                
                        />
                        
                     </div>
                      </form>
             
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
                                <button type="submit" className="btn-submit" > 
                        <BsFillArrowRightCircleFill/></button>
                              </>
                            ) : <p>Nenhuma arquivo selecionado...</p>}
                         </div>
            
                              <div className="lista-cotainer">{children}</div>
          </div>
          </> )}
    </Container>
    </> 
)}