export default function Integrantes() {
  return (
    <>
      <main role="main">
        <div
          className="cards-integrantes"
          role="region"
          aria-labelledby="team-section"
        >
          <h2 id="team-section" className="visually-hidden">
            Integrantes da Equipe
          </h2>
          <div className="card card-1" role="article">
            <div className="img-container">
              <img
                src="../img/img-foto-davi.jpg"
                alt="Foto de Davi Gonzaga, integrante da equipe"
              />
            </div>
            <h3>Davi Gonzaga</h3>
            <p>RM554890</p>
            <p>1TDSPF</p>
            <a
              href="https://github.com/Davignz"
              target="_blank"
              className="github-icon"
              aria-label="Perfil do Github de Davi Gonzaga"
            >
              <img src="../img/img-github.svg" alt="Ícone do Github" />
            </a>
          </div>
          <div className="card card-2" role="article">
            <div className="img-container">
              <img
                src="../img/img-foto-paulo.jpg"
                alt="Foto de Paulo Henrique, integrante da equipe"
              />
            </div>
            <h3>Paulo Henrique</h3>
            <p>RM555300</p>
            <p>1TDSPF</p>
            <a
              href="https://github.com/PauloHenrique63"
              className="github-icon"
              target="_blank"
              aria-label="Perfil do Github de Paulo Henrique"
            >
              <img src="../img/img-github.svg" alt="Ícone do Github" />
            </a>
          </div>
          <div className="card card-3" role="article">
            <div className="img-container">
              <img
                src="../img/img-foto-jennifer.jpg"
                alt="Foto de Jennifer Daleffi, integrante da equipe"
              />
            </div>
            <h3>Jennifer Daleffi</h3>
            <p>RM557137</p>
            <p>1TDSPF</p>
            <a
              href="https://github.com/"
              className="github-icon"
              target="_blank"
              aria-label="Perfil do Github de Jennifer Daleffi"
            >
              <img src="../img/img-github.svg" alt="Ícone do Github" />
            </a>
          </div>
        </div>
        <div
          className="repositorio"
          role="complementary"
          aria-labelledby="repo-link"
        >
          <p id="repo-link">
            Acesse nosso repositório clicando
            <span>
              <a href="https://github.com/FixerAI/Frontend" target="_blank">
                aqui!
              </a>
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
