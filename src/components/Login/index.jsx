import { useState } from 'react'
import * as Styled from './style'

export default function Login() {
  const [emailUser, setEmailUser] = useState('')
  const [senhaUser, setSenhaUser] = useState('')

  async function loginUser() {
    let dadosUser = {
      email: emailUser,
      password: senhaUser
    }
    const response = await fetch('https://thalesloginapi.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosUser)
    })
    const responseBody = await response.json()
    console.log(responseBody)
  }

  return (
    <Styled.Container>
      <div className="login">
        <div className="loginContent">
          <div className="loginGroup">
            <h1>Sing in</h1>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Informe seu email"
                onChange={(event) => setEmailUser(event.target.value)}
              />
              <input
                type="text"
                placeholder="Insira a senha"
                onChange={(event) => setSenhaUser(event.target.value)}
              />
            </div>
            <div className="remenberAndForgot">
              <div className="lembreDeMim">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Lembre de mim</label>
              </div>
              <p>Esqueci a senha</p>
            </div>
            <div className="buttonLoginGroup">
              <button id="login" onClick={loginUser}>
                Login
              </button>
              <p>Criar conta</p>
            </div>
          </div>
        </div>
      </div>
    </Styled.Container>
  )
}
