import { useState } from "react";
import {
  CarroForm,
  CarroMain,
  CloseModalBtn,
  Modal,
  ModalArea,
  StyledInput,
  StyledLabel,
  SubmitBtn,
  Title,
} from "../../style/styles";

export default function Carros() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CarroMain>
        <div className="title-section">
          <Title>Seus Carros</Title>
          <SubmitBtn background="#0282db" onClick={openModal}>
            Cadastrar Carro
          </SubmitBtn>
        </div>
        <CarroForm>
          <h3>Carro</h3>
          <div className="form-section">
            <div className="column">
              <StyledLabel htmlFor="placa" color="#000">
                Placa
              </StyledLabel>
              <StyledInput
                name="placa"
                id="placa"
                type="text"
                placeholder="ABC1D23"
                disabled
              />
              <StyledLabel htmlFor="modelo" color="#000">
                Placa
              </StyledLabel>
              <StyledInput
                name="modelo"
                id="modelo"
                type="text"
                placeholder="Serie 3"
                disabled
              />
              <StyledLabel htmlFor="cor" color="#000">
                Placa
              </StyledLabel>
              <StyledInput
                name="cor"
                id="cor"
                type="text"
                placeholder="Preto"
                disabled
              />
            </div>
            <div className="column">
              <StyledLabel htmlFor="marca" color="#000">
                Marca
              </StyledLabel>
              <StyledInput
                name="marca"
                id="marca"
                type="text"
                placeholder="BMW"
                disabled
              />

              <StyledLabel htmlFor="tipo" color="#000">
                Tipo
              </StyledLabel>
              <StyledInput
                name="tipo"
                id="tipo"
                type="text"
                placeholder="Sedan"
                disabled
              />

              <StyledLabel htmlFor="ano" color="#000">
                Ano
              </StyledLabel>
              <StyledInput
                name="ano"
                id="ano"
                type="text"
                placeholder="2023"
                disabled
              />
            </div>
          </div>
        </CarroForm>
      </CarroMain>
      {isModalOpen && (
        <ModalArea>
          <Modal open onClose={closeModal}>
            <CarroForm>
              <h3>Cadastrar Carro</h3>
              <div className="form-section">
                <div className="column">
                  <StyledLabel htmlFor="placa" color="#000">
                    Placa
                  </StyledLabel>
                  <StyledInput
                    name="placa"
                    id="placa"
                    type="text"
                    placeholder="Digite a placa..."
                    required
                  />

                  <StyledLabel htmlFor="modelo" color="#000">
                    Modelo
                  </StyledLabel>
                  <StyledInput
                    name="modelo"
                    id="modelo"
                    type="text"
                    placeholder="Digite o modelo..."
                    required
                  />
                  <StyledLabel htmlFor="cor" color="#000">
                    Cor
                  </StyledLabel>
                  <StyledInput
                    name="cor"
                    id="cor"
                    type="text"
                    placeholder="Digite a cor..."
                    required
                  />
                </div>
                <div className="column">
                  <StyledLabel htmlFor="marca" color="#000">
                    Marca
                  </StyledLabel>
                  <StyledInput
                    name="marca"
                    id="marca"
                    type="text"
                    placeholder="Digite a marca..."
                    required
                  />

                  <StyledLabel htmlFor="tipo" color="#000">
                    Tipo
                  </StyledLabel>
                  <StyledInput
                    name="tipo"
                    id="tipo"
                    type="text"
                    placeholder="Digite o tipo..."
                    required
                  />

                  <StyledLabel htmlFor="ano" color="#000">
                    Ano
                  </StyledLabel>
                  <StyledInput
                    name="ano"
                    id="ano"
                    type="text"
                    placeholder="Digite o ano..."
                    required
                  />
                </div>
              </div>
              <CloseModalBtn onClick={closeModal}>X</CloseModalBtn>
              <SubmitBtn background="#0282db">Salvar</SubmitBtn>
            </CarroForm>
          </Modal>
        </ModalArea>
      )}
    </>
  );
}
