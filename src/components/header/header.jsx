import { Container } from "./headerStyle";
import logo from "../../assests/img/Copia-de-Copia-de-logo-horizontal.png"

const Header = () => {
  return (
    <>
      <Container>
        <div className="navegador">
          <img src={logo} alt="" />
         <h3>Analisador de Contratos</h3>
        </div>
      </Container>
    </>
  );
};

export default Header;
