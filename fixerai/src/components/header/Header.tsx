import userIcon from "../../assets/img/user.svg";
import {
  CommonLink,
  CommonLinkPages,
  DivLinks,
  FixerLink,
  Nav,
  StyledHeader,
  StyledUl,
} from "../../style/styles";
export default function Header() {
  return (
    <>
      <StyledHeader>
        <Nav>
          <div className="logo-div">
            <FixerLink to="/">
              <h1>
                Fixer<span className="styled-title">AI</span>
              </h1>
            </FixerLink>
          </div>
          <StyledUl>
            <li>
              <CommonLinkPages to="/">Home</CommonLinkPages>
            </li>
            <li>
              <CommonLinkPages to="/chatbot">Chatbot</CommonLinkPages>
            </li>
            <li>
              <CommonLinkPages to="/integrantes">Integrantes</CommonLinkPages>
            </li>
          </StyledUl>
          <DivLinks>
            <CommonLink to="/login">Log In</CommonLink>
            <CommonLink to="/cadastro">Cadastrar</CommonLink>
            <CommonLink to="/usuario">
              <img src={userIcon} alt="Ícone de usuário" />
            </CommonLink>
          </DivLinks>
        </Nav>
      </StyledHeader>
    </>
  );
}
