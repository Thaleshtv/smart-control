import Fundo from '../assets/wave.png'
import * as Styled from './style'

export default function PrincipalPage() {
    return(
        <Styled.Container>
            <div className="imagem">
                <div className="imagemContent">
                    <div className="infos">
                        <h1>Facilite a gestão dos seus alunos!</h1>
                        <div className="descricao">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <button>Cadastre-se</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="login">
                <div className="loginContent">
                    <div className="loginGroup">
                        <h1>Sing in</h1>
                        <div className="inputGroup">
                            <input type="text" placeholder="Informe seu email" />
                            <input type="text" placeholder="Insira a senha" />
                        </div>
                        <div className="remenberAndForgot">
                            <div className="lembreDeMim">
                                <input type="checkbox"  id="checkbox"/>
                                <label htmlFor="checkbox">Lembre de mim</label>
                            </div>
                            <p>Esqueci a senha</p>
                        </div>
                        <div className="buttonLoginGroup">
                            <button id="login">Login</button>
                            <p>Criar conta</p>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Container>
    )
}