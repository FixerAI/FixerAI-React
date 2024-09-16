import { Input } from "../../components/input/Input";
import {
  CadMain,
  CommonLink,
  StyledClearBtn,
  StyledForm,
  SubmitBtn,
} from "../../style/styles";

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
              <Input
                name="nomeCompleto"
                id="nomeCompleto"
                placeholder="Digite seu nome completo"
                type="text"
              />

              <label htmlFor="dataNascimento" role="textbox">
                Data de Nascimento
              </label>
              <Input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                aria-required="true"
                required
              />

              <label htmlFor="email" role="textbox">
                E-mail
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email..."
                required
                aria-required="true"
              />

              <label htmlFor="telefone" role="textbox">
                Telefone
              </label>
              <Input
                type="tel"
                name="telefone"
                id="telefone"
                placeholder="Digite seu telefone..."
                required
                aria-required="true"
              />

              <label htmlFor="cpf" role="textbox">
                CPF
              </label>
              <Input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Digite seu CPF..."
                required
                aria-required="true"
              />
              <label htmlFor="senha" role="textbox">
                Senha
              </label>
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite sua senha..."
                required
                aria-required="true"
              />

              <label htmlFor="confirmarSenha" role="textbox">
                Confirmar Senha
              </label>
              <Input
                type="password"
                name="confirmarSenha"
                id="confirmarSenha"
                placeholder="Confirme sua senha..."
                required
                aria-required="true"
              />

              <div className="btns-form">
                <StyledClearBtn>{"Limpar"}</StyledClearBtn>
                <SubmitBtn>{"Cadastrar"}</SubmitBtn>
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
