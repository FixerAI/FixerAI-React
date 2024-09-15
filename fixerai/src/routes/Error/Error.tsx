
import { Link } from "react-router-dom";
export default function Error(){
  return(
    <>
    <h1>Oops! Página não encontrada. </h1>
    <p>Código do erro: 404</p>
    <Link to={"/"}>Voltar para a home</Link>
    </>
  )
}