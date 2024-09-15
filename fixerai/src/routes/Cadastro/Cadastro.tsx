import { CadMain, CommonLink, StyledForm } from "../../style/styles";

export default function Cadastro() {
  return (
    <>
      <CadMain role="main">
        <div className="container">
          <div className="title-section">
            <h1>Cadastre-se</h1>
          </div>
          <StyledForm role="form">
            <div className="inputs-section">
              <h2 className="title-division">Dados Pessoais</h2>
              <label htmlFor="nomeCompleto" role="textbox">
                Nome
              </label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                placeholder="Digite seu nome completo..."
                required
                aria-required="true"
              />

              <label htmlFor="dataNascimento" role="textbox">
                Data de Nascimento
              </label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                required
                aria-required="true"
              />

              <label htmlFor="email" role="textbox">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email..."
                required
                aria-required="true"
              />

              <label htmlFor="telefone" role="textbox">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Digite seu telefone..."
                required
                aria-required="true"
              />

              <label htmlFor="cpf" role="textbox">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF..."
                required
                aria-required="true"
              />
              <label htmlFor="senha" role="textbox">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Digite sua senha..."
                required
                aria-required="true"
              />

              <label htmlFor="confirmarSenha" role="textbox">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirme sua senha..."
                required
                aria-required="true"
              />

              <div className="btns-form">
                <button className="reset-button" type="reset" role="button">
                  Limpar
                </button>
                <button className="submit-button" type="submit" role="button">
                  Cadastrar
                </button>
              </div>
            </div>
          </StyledForm>
        </div>
        <p>
          Já possui um cadastro? <CommonLink to="/login">Entrar</CommonLink>
        </p>
      </CadMain>
    </>
  );
}
