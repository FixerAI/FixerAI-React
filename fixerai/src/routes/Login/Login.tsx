import { CommonLink, LoginMain } from "../../style/styles";
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
                <label htmlFor="input-email" id="login" role="textbox">
                  Email
                </label>
                <input
                  type="email"
                  id="input-email"
                  name="input-email"
                  placeholder="Digite seu email..."
                  required
                  aria-required="true"
                />
                <label htmlFor="input-senha" id="senha" role="textbox">
                  {" "}
                  Senha{" "}
                </label>
                <input
                  type="password"
                  id="input-senha"
                  name="input-senha"
                  placeholder="Digite sua senha..."
                  required
                  aria-required="true"
                />
              </div>
              <div className="submit-section">
                <button type="submit">Entrar</button>
              </div>
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
