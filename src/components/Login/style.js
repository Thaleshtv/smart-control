import styled from 'styled-components'

export const Container = styled.div`
  .login {
    width: 43vw;
    height: 100vh;

    .loginContent {
      width: 100%;
      height: 100%;
      padding: 4rem;
    }
  }

  .loginGroup {
    margin-top: 5rem;

    h1 {
      color: #575a58;
      font-size: 4.5rem;
      font-weight: 700;
    }
  }

  .inputGroup {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin-top: 5rem;

    input {
      width: 100%;
      border: 2px solid #adb1c7;
      border-radius: 0.5rem;
      font-weight: 700;
      padding: 1rem;

      border-radius: 5px;
      outline-color: #0e2257;
    }
  }

  .remenberAndForgot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    font-weight: 700;
    font-size: 1rem;
    color: #575a58;

    .lembreDeMim {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .buttonLoginGroup {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;

    button {
      width: 100%;
      border-radius: 0.5rem;
      font-weight: 700;
      color: #fcfcfe;
      font-size: 1.5rem;
      height: 57px;

      border-radius: 5px;
      background-color: #0e2257;
      margin-top: 4rem;
    }

    p {
      font-weight: 700;
      font-size: 1rem;
      color: #575a58;
      cursor: pointer;
    }
  }
`
