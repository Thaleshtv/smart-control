import { GlobalStyle } from './styles/global'
import PrincipalPage from './pages/PrincipalPage'
import Routes from './routes'

export default function App() {
  return (
    <>
      <Routes>
        <PrincipalPage />
      </Routes>
      <GlobalStyle />
    </>
  )
}
