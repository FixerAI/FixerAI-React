import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding-inline: 4rem;
  position: fixed;
  background-color: #fff;
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
  font-weight: 900;

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
  bottom: 0;
  font-size: 1.4rem;
  background-color: #fff;
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 10rem;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 3.5rem;
      width: 100%;
    }
    p {
      font-size: 1.8rem;
      font-weight: 300;
      color: #171717;
      width: 75%;
    }
  }

  .img-content {
    max-width: 40%;
    img {
      max-width: 100%;
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
`;

export const CadMain = styled.main`
  width: 100%;
  height: auto;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    width: 50%;
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

    .title-section h1 {
      font-size: 4rem;
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

  .inputs-section input {
    width: 100%;
    font-family: "Poppins", sans-serif;
    padding: 0.8rem 0.6rem;
    border-radius: 0.3rem;
    border: none;
    outline: none;
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

    .reset-button {
      width: 8.4rem;
      height: 3.4rem;
      background-color: #fff;
      border-radius: 0.4rem;
      border: 1.5px solid #e01717;
      color: #e01717;
      font-size: 1.8rem;

      &:hover {
        background-color: #e01717;
        color: #fff;
        border: 1px solid #fff;
      }
    }

    .submit-button {
      width: 11rem;
      height: 3.6rem;
      background-color: transparent;
      border-radius: 0.4rem;
      border: 0.15rem solid #fff;
      font-size: 1.8rem;
      color: #fff;

      &:hover {
        background-color: #23f26a;
        color: #052610;
        border: 0.15rem solid #052610;
      }
    }
  }
`;

export const LoginMain = styled.main`
  width: 100%;
  height: auto;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4rem;
  }

  .login {
    width: 35%;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0282db;
    padding: 10px;
    border-radius: 8px;

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

        .inputs-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .inputs-section input {
          width: 100%;
          height: 3.8rem;
          padding: 0 10px;
          border-radius: 4px;
          border: 1px solid #0282db;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
        }

        .inputs-section label {
          font-size: 1.4rem;
          color: #fff;
        }

        .submit-section {
          width: 100%;
          display: flex;
          justify-content: center;

          button {
            width: 100px;
            font-size: 18px;
            font-family: "Poppins", sans-serif;
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            padding: 5px 10px;
            cursor: pointer;
          }
          button:hover {
            border: 1px solid #fff;
            transition: 0.5s ease-in-out;
            box-shadow: inset 6.5em 0 0 0 #023e8a;
          }
        }
      }
    }
  }
`;

export const MainChat = styled.main`
  width: 100%;
  height: 100vh;
  padding-inline-start: 80px;
`;
