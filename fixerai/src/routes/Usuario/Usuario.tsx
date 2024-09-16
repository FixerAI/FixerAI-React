import {
  InputsArea,
  SectionTitle,
  StyledClearBtn,
  StyledInput,
  StyledLabel,
  SubmitBtn,
  Title,
  UserForm,
  UserMain,
} from "../../style/styles";

export default function Usuario() {
  return (
    <>
      <UserMain>
        <Title>Seus Dados</Title>
        <UserForm>
          <InputsArea>
            <div className="section">
              <SectionTitle>Dados Pessoais</SectionTitle>
              <div className="column">
                <StyledLabel htmlFor="nome" color="#000">
                  Nome
                </StyledLabel>
                <StyledInput
                  name="nome"
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome..."
                  required
                />

                <StyledLabel htmlFor="telefone" color="#000">
                  Telefone
                </StyledLabel>
                <StyledInput
                  name="telefone"
                  id="telefone"
                  type="tel"
                  placeholder="Digite seu telefone..."
                  required
                />

                <StyledLabel htmlFor="dataNascimento" color="#000">
                  Data de Nascimento
                </StyledLabel>
                <StyledInput
                  name="dataNascimento"
                  id="dataNascimento"
                  type="date"
                  placeholder="DD/MM/AAAA"
                  required
                />
              </div>

              <div className="column">
                <StyledLabel htmlFor="email" color="#000">
                  E-Mail
                </StyledLabel>
                <StyledInput
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Digite seu email..."
                  required
                />

                <StyledLabel htmlFor="cpf" color="#000">
                  CPF
                </StyledLabel>
                <StyledInput
                  name="cpf"
                  id="cpf"
                  type="text"
                  placeholder="Digite seu CPF..."
                  required
                />

                <StyledLabel htmlFor="cep" color="#000">
                  CEP
                </StyledLabel>
                <StyledInput
                  name="cep"
                  id="cep"
                  type="text"
                  placeholder="CEP"
                  required
                />
              </div>
            </div>

            {/* Endereço */}
            <div className="section">
              <SectionTitle>Endereço</SectionTitle>
              <div className="column">
                <StyledLabel htmlFor="logradouro" color="#000">
                  Logradouro
                </StyledLabel>
                <StyledInput
                  name="logradouro"
                  id="logradouro"
                  type="text"
                  placeholder="Logradouro"
                  required
                />

                <StyledLabel htmlFor="complemento" color="#000">
                  Complemento
                </StyledLabel>
                <StyledInput
                  name="complemento"
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                />

                <StyledLabel htmlFor="cidade" color="#000">
                  Cidade
                </StyledLabel>
                <StyledInput
                  name="cidade"
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                  required
                />
              </div>

              <div className="column">
                <StyledLabel htmlFor="numero" color="#000">
                  Número
                </StyledLabel>
                <StyledInput
                  name="numero"
                  id="numero"
                  type="text"
                  placeholder="Número"
                  required
                />

                <StyledLabel htmlFor="bairro" color="#000">
                  Bairro
                </StyledLabel>
                <StyledInput
                  name="bairro"
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                  required
                />

                <StyledLabel htmlFor="estado" color="#000">
                  Estado
                </StyledLabel>
                <StyledInput
                  name="estado"
                  id="estado"
                  type="text"
                  placeholder="Estado"
                  required
                />
              </div>
            </div>

            {/* CNH */}
            <div className="section">
              <SectionTitle>CNH</SectionTitle>
              <div className="column">
                <StyledLabel htmlFor="numeroCNH" color="#000">
                  Número da CNH
                </StyledLabel>
                <StyledInput
                  name="numeroCNH"
                  id="numeroCNH"
                  type="text"
                  placeholder="Digite seu número de CNH..."
                  required
                />

                <StyledLabel htmlFor="dataEmissaoCNH" color="#000">
                  Data de Emissão - CNH
                </StyledLabel>
                <StyledInput
                  name="dataEmissaoCNH"
                  id="dataEmissaoCNH"
                  type="date"
                  placeholder="DD/MM/AAAA"
                  required
                />
              </div>

              <div className="column">
                <StyledLabel htmlFor="validadeCNH" color="#000">
                  Data de Validade - CNH
                </StyledLabel>
                <StyledInput
                  name="validadeCNH"
                  id="validadeCNH"
                  type="date"
                  placeholder="DD/MM/AAAA"
                  required
                />

                <StyledLabel htmlFor="categoriaCNH" color="#000">
                  Categoria - CNH
                </StyledLabel>
                <StyledInput
                  name="categoriaCNH"
                  id="categoriaCNH"
                  as="select"
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                </StyledInput>
              </div>
            </div>

            {/* Senha */}
            <div className="section">
              <SectionTitle>Senha</SectionTitle>
              <div className="column">
                <StyledLabel htmlFor="senha" color="#000">
                  Digite sua senha
                </StyledLabel>
                <StyledInput
                  name="senha"
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>

              <div className="column">
                <StyledLabel htmlFor="confirmSenha" color="#000">
                  Digite sua senha novamente
                </StyledLabel>
                <StyledInput
                  name="confirmSenha"
                  id="confirmSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  required
                />
              </div>
            </div>
          </InputsArea>

          <div className="button-area">
            <div>
              <SubmitBtn background="#0282db" type="submit">
                Salvar
              </SubmitBtn>
              <StyledClearBtn type="reset">Limpar</StyledClearBtn>
            </div>
            <StyledClearBtn type="button">Deletar Conta</StyledClearBtn>
          </div>
        </UserForm>
      </UserMain>
    </>
  );
}
