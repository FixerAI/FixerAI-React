import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 40px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FixerLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 2.2rem;

  .styled-title {
    color: #023e8a;
  }
`;

export const CommonLinkPages = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #0282db;
    text-decoration: underline;
  }
`;

export const CommonLink = styled(Link)`
  text-decoration: none;
  color: #0282db;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.8rem;
  font-size: 1.6rem;
`;

export const DivLinks = styled.div`
  gap: 2.8rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  font-size: 1.4rem;
`;
