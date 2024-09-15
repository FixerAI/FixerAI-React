import imgHome from "../../assets/img/img-home.svg";
import { ButtonLink, MainContent } from "../../style/styles";
export default function Home() {
  return (
    <>
      <MainContent>
        <div className="content">
          <div className="text-content">
            <h2>Sua solução automotiva inteligente</h2>
            <p>
              Um ecossistema completo para te auxiliar nas particularidades do
              seu veículo
            </p>
            <ButtonLink to="/cadastro">Cadastrar</ButtonLink>
          </div>
          <div className="img-content">
            <img src={imgHome} alt="Carro ilustrativo" />
          </div>
        </div>
      </MainContent>
    </>
  );
}
