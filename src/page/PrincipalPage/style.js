import styled from 'styled-components'
import Fundo from '../../assets/wave.png'

export const Container = styled.div`
  display: flex;

  .imagem {
    background-image: url(${Fundo});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  }

  .imagemContent {
    width: 100%;
    height: 100%;
    padding: 4.5rem;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 12rem;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: #fcfcfe;
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
      color: #fcfcfe;
      text-align: justify;
    }

    button {
      width: 30%;
      border-radius: 0.5rem;
      font-weight: 700;
      color: #fcfcfe;
      font-size: 1.25rem;
      height: 57px;
      border: 0;
      padding: 0.5rem;

      border-radius: 5px;
      background-color: #0e2257;
      margin-top: 3rem;
    }
  }
`
