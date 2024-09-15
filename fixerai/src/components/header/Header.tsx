import userIcon from "../../assets/img/img-avatar.svg";
import {
  CommonLink,
  CommonLinkPages,
  DivLinks,
  FixerLink,
  Nav,
  StyledHeader,
  StyledUl,
} from "../../style/styles";
import UserAvatar from "../user/UserAvatar";
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
              <UserAvatar width="45px" src={userIcon} alt="Ícone do usuário" />
            </CommonLink>
          </DivLinks>
        </Nav>
      </StyledHeader>
    </>
  );
}
