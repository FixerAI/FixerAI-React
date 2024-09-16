import { Input } from "../../components/input/Input";
import {
  CommonLink,
  LoginMain,
  StyledLabel,
  SubmitBtn,
} from "../../style/styles";

export default function Login() {
  return (
    <>
      <LoginMain>
        <div className="login" role="form" aria-labelledby="login-form">
          <div className="title-form">
            <h2 id="login-form">Login</h2>
          </div>
          <div className="form-content">
            <form aria-labelledby="login-form">
              <div className="inputs-section">
                <StyledLabel htmlFor="input-email" color="#fff">
                  Email
                </StyledLabel>
                <Input
                  type="email"
                  name="input-email"
                  id="input-email"
                  placeholder="Digite seu email..."
                  required
                  aria-required="true"
                />
                <StyledLabel htmlFor="input-senha" color="#fff">
                  Senha
                </StyledLabel>
                <Input
                  type="password"
                  name="input-senha"
                  id="input-senha"
                  placeholder="Digite sua senha..."
                  required
                  aria-required="true"
                />
              </div>
              <SubmitBtn background="transparent" type="submit">
                Entrar
              </SubmitBtn>
            </form>
          </div>
        </div>
        <p>
          Ainda não é cadastrado?
          <span>
            <CommonLink to="/cadastro"> Cadastre-se</CommonLink>
          </span>
        </p>
      </LoginMain>
    </>
  );
}
