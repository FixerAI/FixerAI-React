type ImgAvatarProps = {
  width: string;
  src: string;
};
export default function UserAvatar(props: ImgAvatarProps) {
  return (
    <>
      <img src={props.src} width={props.width} alt="Ícone do usuário" />
    </>
  );
}
