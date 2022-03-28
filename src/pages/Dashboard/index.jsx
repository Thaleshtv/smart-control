import { logOut, selectUser } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard() {
  const { nameUser } = useSelector(selectUser)
  const { isLoged } = useSelector(selectUser)

  const logado = isLoged ? 'logado' : 'deslogado'

  const dispatch = useDispatch()

  const handleLogOut = () => {
    localStorage.removeItem('accesToken')
    dispatch(logOut())
  }
  return (
    <>
      <h1>Usuario {logado}</h1>
      {isLoged && <h2>Olá {nameUser}</h2>}
      <button onClick={handleLogOut}>LOGOUT</button>
    </>
  )
}
