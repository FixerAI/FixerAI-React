import imgDavi from "../../assets/img/img-foto-davi.jpeg";
import imgJennifer from "../../assets/img/img-foto-jennifer.jpg";
import imgPaulo from "../../assets/img/img-foto-paulo.jpg";
import { Card } from "../../components/card/Card";
import { ContainerCards, MainIntegrantes } from "../../style/styles";
export default function Integrantes() {
  return (
    <>
      <MainIntegrantes role="main">
        <h2>Integrantes da Equipe</h2>
        <ContainerCards
          className="cards-integrantes"
          role="region"
          aria-labelledby="team-section"
        >
          <Card
            nome="Davi Gonzaga Ferreira"
            rm="554890"
            turma="1TDSPV"
            alt={"Foto do Davi"}
            src={imgDavi}
            width="0"
            githubUrl="davignz"
          />
          <Card
            nome="Paulo Henrique Monteiro Golovanevsky"
            rm="555300"
            turma="1TDSPF"
            alt="Foto do Paulo"
            src={imgPaulo}
            width="0"
            githubUrl="paulohenrique63"
          />
          <Card
            nome="Jennifer Eduarda Vieira Daleffi"
            rm="557137"
            turma="1TDSPF"
            alt="Foto da Jennifer"
            src={imgJennifer}
            width="0"
            githubUrl="jenniferdaleffi"
          />
        </ContainerCards>
        <div role="complementary" aria-labelledby="repo-link">
          {/* prettier-ignore */}
          <p>
            
            Acesse nosso repositório clicando 
            <span> {/* prettier-ignore */}
              <a href="https://github.com/FixerAI/FixerAI-React" target="_blank">aqui!</a>
            </span>
          </p>
        </div>
      </MainIntegrantes>
    </>
  );
}
