import imgAvatar from "../../assets/img/img-avatar.svg";
import UserAvatar from "../../components/user/UserAvatar";
import {
  ChatMenu,
  ContentChat,
  InteractChat,
  MainChat,
  StyledClearBtn,
  StyledInput,
} from "../../style/styles";
export default function Chatbot() {
  return (
    <MainChat>
      <div className="container">
        <ChatMenu>
          <div className="user-data">
            <UserAvatar width="50px" src={imgAvatar} />
            <p>Joãozinho</p>
          </div>
        </ChatMenu>
        <ContentChat>
          <h1>Como posso te ajudar?</h1>
          <InteractChat>
            <form>
              <StyledInput
                type="text"
                name="input-usuario"
                id="input-usuario"
                placeholder="Digite aqui..."
              />
              <StyledClearBtn type="reset">Limpar</StyledClearBtn>
            </form>
          </InteractChat>
        </ContentChat>
      </div>
    </MainChat>
  );
}
