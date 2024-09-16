import { Input } from "../../components/input/Input";
import {
  CadMain,
  CommonLink,
  StyledClearBtn,
  StyledForm,
  StyledLabel,
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
              <StyledLabel color="#fff" htmlFor="nomeCompleto">
                Nome
              </StyledLabel>
              <Input
                name="nomeCompleto"
                id="nomeCompleto"
                placeholder="Digite seu nome completo"
                type="text"
              />

              <StyledLabel color="#fff" htmlFor="dataNascimento" role="textbox">
                Data de Nascimento
              </StyledLabel>
              <Input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                aria-required="true"
                required
              />

              <StyledLabel color="#fff" htmlFor="email" role="textbox">
                E-mail
              </StyledLabel>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email..."
                required
                aria-required="true"
              />

              <StyledLabel color="#fff" htmlFor="telefone" role="textbox">
                Telefone
              </StyledLabel>
              <Input
                type="tel"
                name="telefone"
                id="telefone"
                placeholder="Digite seu telefone..."
                required
                aria-required="true"
              />

              <StyledLabel color="#fff" htmlFor="cpf" role="textbox">
                CPF
              </StyledLabel>
              <Input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Digite seu CPF..."
                required
                aria-required="true"
              />
              <StyledLabel color="#fff" htmlFor="senha" role="textbox">
                Senha
              </StyledLabel>
              <Input
                type="password"
                name="senha"
                id="senha"
                placeholder="Digite sua senha..."
                required
                aria-required="true"
              />

              <StyledLabel color="#fff" htmlFor="confirmarSenha" role="textbox">
                Confirmar Senha
              </StyledLabel>
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
                <SubmitBtn background="#0266b7">{"Cadastrar"}</SubmitBtn>
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
