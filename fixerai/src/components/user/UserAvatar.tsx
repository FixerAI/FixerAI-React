export type ImgAvatarProps = {
  width: string;
  src: string;
  alt: string;
};
export default function UserAvatar(props: ImgAvatarProps) {
  return (
    <>
      <img src={props.src} width={props.width} alt={props.alt} />
    </>
  );
}
