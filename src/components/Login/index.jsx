import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changeUser } from '../../redux/userSlice'

import * as Styled from './style'

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    loginUser(data)
  }

  async function loginUser(data) {
    const response = await fetch('https://thalesloginapi.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const responseBody = await response.json()
    console.log(responseBody)

    if (responseBody.success === true) {
      dispatch(changeUser(responseBody.user.name))
      history.push('/dashboard')
    }
  }

  return (
    <Styled.Container>
      <div className="login">
        <div className="loginContent">
          <div className="loginGroup">
            <h1>Sing in</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              // onKeyPress={(event) => {
              //   event.key === 'Enter' && event.preventDefault()
              // }}
            >
              <div className="inputGroup">
                <div>
                  <input
                    type="text"
                    {...register('email', { required: true })}
                    placeholder="Informe seu email"
                  />
                  {errors.email && <Styled.SpanError>Campo obrigatório!</Styled.SpanError>}
                </div>
                <div>
                  <input
                    type="password"
                    {...register('password', { required: true })}
                    placeholder="Insira a senha"
                  />
                  {errors.password && <Styled.SpanError>Campo obrigatório!</Styled.SpanError>}
                </div>
              </div>
              <div className="remenberAndForgot">
                <div className="lembreDeMim">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Lembre de mim</label>
                </div>
                <p>Esqueci a senha</p>
              </div>
              <div className="buttonLoginGroup">
                <button type="submit">Login</button>
                <p>Criar conta</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Styled.Container>
  )
}
