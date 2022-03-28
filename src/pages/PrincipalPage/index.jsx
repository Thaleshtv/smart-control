import Login from '../../components/Login'
import * as Styled from './style'

export default function PrincipalPage() {
  return (
    <Styled.Container>
      <div className="imagem">
        <div className="imagemContent">
          <div className="infos">
            <h1>Facilite a gestão dos seus alunos!</h1>
            <div className="descricao">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <button>Cadastre-se</button>
            </div>
          </div>
        </div>
      </div>
      <Login />
    </Styled.Container>
  )
}
