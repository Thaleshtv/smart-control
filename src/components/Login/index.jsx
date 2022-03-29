import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changeUser } from '../../redux/userSlice'

import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

import * as Styled from './style'

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    loginUser(data)
  }

  async function loginUser(data) {
    setLoading(true)
    const response = await fetch('https://thalesloginapi.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const responseBody = await response.json()
    setLoading(false)
    console.log(responseBody)

    const accesToken = 'accesToken'
    if (responseBody.success === true) {
      localStorage.setItem(accesToken, responseBody.token)
      dispatch(
        changeUser({
          nameUser: responseBody.user.name,
          token: responseBody.token
        })
      )
      history.push('/dashboard')
    }
    if (responseBody.success === false) {
      setError(true)
      setErrorMessage(responseBody.message)
      setTimeout(() => {
        setError(false)
      }, 3000)
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
              onKeyPress={(event) => {
                event.key === 'Enter' && event.preventDefault()
              }}
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
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <CircularProgress color="inherit" />
                    </Box>
                  ) : (
                    'Login'
                  )}
                </button>
                <p>Criar conta</p>
                <Fade in={error} sx={{ width: '100%' }}>
                  <Stack>
                    <Alert variant="filled" severity="error">
                      <AlertTitle>
                        <strong>Erro!</strong>
                      </AlertTitle>
                      {errorMessage}
                    </Alert>
                  </Stack>
                </Fade>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Styled.Container>
  )
}
