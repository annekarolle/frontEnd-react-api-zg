import { useContext, useState } from "react";
import { Container } from "./submitComponentsStyle";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { AuthContext } from "../../context/AuthContext";


export const SubmitComponents = ({
  handleSubmit,
  handleChange,
  handleFileChange,
  children,
  className,
  rules,
  title

}) => {
  const [ruleName, setRuleName] = useState("");

  const {
    nomeArquivo, setNomeArquivo,
    conteudo_base64, setConteudo_base64,
  } = useContext(AuthContext);

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
                          onChange={handleFileChange}
                        />

                     </div>
                      </form>
                      <div className="lista-cotainer">{children}</div>
          </div>
          </> )}
    </Container>
    </>
)}
