import { Link } from "react-router-dom";
import styled from "styled-components";
import UserAvatar from "../components/user/UserAvatar";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding-inline: 4rem;
  position: fixed;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 769px) {
    .hamburguer-icon {
      display: none;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8rem;
  right: 0;
  background-color: #fff;
  width: 100%;
  height: 65vh;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const FixerLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 900;
  width: 100%;

  .styled-title {
    color: #023e8a;
  }
`;

export const CommonLinkPages = styled(Link)`
  width: 100%;
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

export const StyledUserAvatar = styled(UserAvatar)<{ width: string }>`
  width: ${(props) => props.width};
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.8rem;
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivLinks = styled.div`
  gap: 2rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  font-size: 1.4rem;
  background-color: #fff;
  text-align: center;
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  padding-block: 8rem 2rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 5rem;

  @media (max-width: 768px) {
    padding-inline: 2rem;
    min-height: auto;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .text-content {
      width: 60rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      p {
        font-weight: 300;
        color: #171717;
      }
      @media (min-width: 768px) {
        h2 {
          font-size: 4rem;
        }
        p {
          font-size: 1.8rem;
        }
      }

      @media (min-width: 465px) and (max-width: 768px) {
        h2 {
          font-size: 3.5rem;
        }
        p {
          font-size: 1.6rem;
        }
      }
      @media (max-width: 768px) {
        align-items: center;
        text-align: center;
      }
      @media (max-width: 465px) {
        h2 {
          font-size: 2.3rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }

  .img-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 42rem;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .img-content {
      max-width: 30rem;
      height: 100%;
    }
  }
`;

export const ButtonLink = styled(Link)`
  width: fit-content;
  padding: 0.8rem 1.4rem;
  background-color: #0282db;
  border-radius: 0.5rem;
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
  margin-top: 1rem;

  &:hover {
    background-color: #023e8a;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledClearBtn = styled.button`
  width: fit-content;
  padding-inline: 1rem;
  height: 3.6rem;
  background-color: #fff;
  color: #e01717;
  border: 1px solid #e01717;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;

  &:hover {
    background-color: #e01717;
    color: #fff;
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button<{ background: string }>`
  width: fit-content;
  padding-inline: 1rem;
  height: 3.6rem;
  background-color: ${(props) => props.background};
  border-radius: 0.5rem;
  border: 1px solid #fff;
  font-size: 1.8rem;
  color: #fff;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #023e8a;
    color: #fff;
    border: 0.15rem solid #fff;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 3.7rem;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-family: 1.6rem;
  border: none;
  padding: 1rem;
  outline: none;
  background-color: #f5f5f5;
`;

export const CadMain = styled.main`
  width: 100%;
  height: auto;
  padding-top: 8rem;
  padding-bottom: 2rem;
  padding-inline: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    width: 50rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0282db;
    color: #fff;
    border-radius: 1rem;
    padding: 3rem 10rem;
    gap: 3rem;

    @media (max-width: 572px) {
      width: 100%;
      padding-inline: 2rem;
    }

    .title-section h1 {
      font-size: 4rem;
      text-align: center;

      @media (max-width: 572px) {
        font-size: 3rem;
      }
    }
  }

  p {
    font-size: 1.6rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  color: #fff;

  .inputs-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.4rem;

    .title-division {
      text-align: center;
    }
  }

  .btns-form {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-block-start: 4rem;

    button {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const LoginMain = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    padding-inline: 2rem;
  }
  .login {
    width: 35rem;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0282db;
    padding: 10px;
    border-radius: 8px;

    @media (max-width: 425px) {
      width: 100%;
    }
    @media (min-width: 425px) and (max-width: 768px) {
      width: 35rem;
    }

    .title-form {
      color: #fff;
      font-size: 2.6rem;
    }

    .form-content {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-inline: 2rem;

      form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .inputs-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
      }
    }
  }
`;

export const StyledLabel = styled.label<{ color: string }>`
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;

export const MainChat = styled.main`
  width: 100%;
  height: 100vh;
  padding-block-start: 8rem;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: start;
    }
  }
`;

export const ChatMenu = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  background-color: #0266b7;
  border-radius: 8px;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;

  .user-data {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-size: 2rem;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 14%;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    .user-data {
      justify-content: center;
      gap: 2rem;
      p {
        color: #000;
      }
    }
  }
`;

export const ContentChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;

  h1 {
    position: relative;
    top: -4rem;
    font-size: 3.5rem;
    z-index: -1;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      top: 10rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const InteractChat = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;

  form {
    width: 100%;
    display: flex;
    gap: 1rem;
  }
`;

export const MainIntegrantes = styled.main`
  width: 100%;
  padding-block-start: 8rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 2rem;
  gap: 2rem;

  h2 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    height: auto;
    text-align: center;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #0282db;
  box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);
  gap: 5px;
  padding: 20px;
  text-align: center;

  @media (min-width: 425px) and (max-width: 768px) {
    width: 35rem;
  }

  &:hover {
    transform: scale(102%);
    transition: 0.2s ease-in-out;
  }
  h3 {
    font-size: 1.4rem;
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

export const UserMain = styled.main`
  width: 100%;
  height: auto;
  padding-inline: 2rem;
  padding-block: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserForm = styled.form`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  border-radius: 0.8rem;
  border: 1px solid #0266b7;
  box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);

  .button-area {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;

      .subm-clear {
        display: flex;
        gap: 4rem;
      }
    }
  }
`;

export const InputsArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  .section {
    width: 48%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }

    .column {
      text-align: left;
      padding: 1rem;
    }
  }
`;
export const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const CarroMain = styled.main`
  width: 100%;
  height: auto;
  padding-inline: 2rem;
  padding-block: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
  .form-section {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 2rem;

    .column {
      text-align: left;
    }
  }
`;

export const CarroForm = styled.form`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.8rem;
  border: 1px solid #0266b7;
  text-align: left;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.75);

  h3 {
    font-size: 2.5rem;
  }

  .button-area {
    display: flex;
    justify-content: space-between;
  }

  .form-section {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const ModalArea = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.dialog`
  z-index: 99;
  width: 80%;
  max-height: 100%;
  margin: 0 auto;
  border: none;
  border-radius: 0.8rem;
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;
