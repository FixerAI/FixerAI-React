import imgAvatar from "../../assets/img/img-avatar.svg";
export default function Chatbot() {
  return (
    <main>
      <div className="container">
        <div className="menu-ia">
          <div className="avatar-usuario">
            <img src={imgAvatar} alt="Icone do usuário" />
          </div>
          <div className="nome-usuario">
            <p>Joãozinho</p>
          </div>
        </div>
        <div className="content">
          <h1>Como posso te ajudar?</h1>
          <div className="interacao-usuario">
            <input
              type="text"
              name="input-usuario"
              id="input-usuario"
              placeholder="Digite aqui..."
            />
            <button type="reset" name="limpar" id="btn-limpar">
              Limpar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
