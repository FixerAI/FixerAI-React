import iconGithub from "../../assets/img/img-github.svg";
import { StyledCard } from "../../style/styles";
import UserAvatar, { ImgAvatarProps } from "../user/UserAvatar";
type CardProps = {
  nome: string;
  rm: string;
  turma: string;
  githubUrl: string;
};

export function Card(props: CardProps & ImgAvatarProps) {
  return (
    <>
      <StyledCard>
        <div className="img-container">
          <UserAvatar src={props.src} width={props.width} alt={props.alt} />
        </div>
        <h3>{props.nome}</h3>
        <p>{props.rm}</p>
        <p>{props.turma}</p>
        <a
          href={`https://github.com/${props.githubUrl}`}
          target="_blank"
          aria-label={`Perfil do Github de ${props.nome}`}
        >
          <img src={iconGithub} alt="Ícone do Github" />
        </a>
      </StyledCard>
    </>
  );
}
