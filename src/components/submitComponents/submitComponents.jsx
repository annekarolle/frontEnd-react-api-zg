import { Container } from "./submitComponentsStyle";
import { AiFillPlusCircle } from "react-icons/ai";


export const SubmitComponents = ({
  handleChange,
  handleSubmit,
  handleInputChange,
  children,
  className,
  title

}) => {


  return (
    <>
      <Container className="class-container">
        {(
         <>
          <div className={`class-container ${className}`}>
            <form onSubmit={handleSubmit}>
              <h3>{title}</h3>
              <div className="container-intermediario">
                <input
                  type={className === "regra" ? "text" : "file"}
                  name={className}
                  id={className}
                  onChange={handleInputChange}
                />
                <label htmlFor={className} className="add-button" onClick={handleSubmit}>
                  <AiFillPlusCircle/>
                </label>
              </div>
            </form>
            <div className="lista-cotainer">{children}</div>
          </div>
          </> )}
    </Container>
    </>
)}
