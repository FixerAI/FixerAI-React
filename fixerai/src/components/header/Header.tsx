import { useState } from "react";
import userIcon from "../../assets/img/img-avatar.svg";
import hamburguerIcon from "../../assets/img/img-menu.svg";
import {
  CommonLink,
  CommonLinkPages,
  DivLinks,
  FixerLink,
  MobileNav,
  Nav,
  StyledHeader,
  StyledUl,
} from "../../style/styles";
import UserAvatar from "../user/UserAvatar";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader>
        <Nav>
          <FixerLink to="/">
            <h1>
              Fixer<span className="styled-title">AI</span>
            </h1>
          </FixerLink>
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
          <div className="menu-icon">
            <div className="hamburguer-icon" onClick={toggleMenu}>
              <img src={hamburguerIcon} alt="Ícone do menu" />
            </div>
          </div>
          {isOpen && (
            <MobileNav>
              <CommonLink to="/" onClick={toggleMenu}>
                Home
              </CommonLink>
              <CommonLink to="/chatbot" onClick={toggleMenu}>
                Chatbot
              </CommonLink>
              <CommonLink to="/integrantes" onClick={toggleMenu}>
                Integrantes
              </CommonLink>
              <CommonLink to="/login" onClick={toggleMenu}>
                Log In
              </CommonLink>
              <CommonLink to="/cadastro" onClick={toggleMenu}>
                Cadastrar
              </CommonLink>
              <CommonLink to="/usuario" onClick={toggleMenu}>
                Área do Usuário
              </CommonLink>
            </MobileNav>
          )}
        </Nav>
      </StyledHeader>
    </>
  );
}
