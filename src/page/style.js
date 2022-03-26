import styled from "styled-components";
import Fundo from '../assets/wave.png'

export const Container = styled.div`
    display: flex;

    .imagem {
        background-image: url(${Fundo});
        background-repeat: no-repeat;
        background-size: cover;
        width: 60vw;
        min-height: 100vh;
    }

    .login {
        width: 50vw ;
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
            color: #575A58;
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
            border: 2px solid #ADB1C7;
            border-radius: 0.5rem;
            font-weight: 700;
            padding: 1rem;
            
            border-radius: 5px;
            outline-color: #0E2257;
        }
    }

    .remenberAndForgot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;

        font-weight: 700;
        font-size: 1rem;
        color: #575A58;

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
            color: #FCFCFE;
            font-size: 1.5rem;
            height: 57px;
            
            border-radius: 5px;
            background-color: #0E2257;
            margin-top: 4rem;
        }

        p {
            font-weight: 700;
            font-size: 1rem;
            color: #575A58;
            cursor: pointer;
        }
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
            color: #FCFCFE;
        }

        p {
            font-size: 1.25rem;
            font-weight: 400;
            color: #FCFCFE;
            text-align: justify;
        }

        button {
            width: 30%;
            border-radius: 0.5rem;
            font-weight: 700;
            color: #FCFCFE;
            font-size: 1.25rem;
            height: 57px;
            border: 0;
            padding: 0.5rem;
            
            border-radius: 5px;
            background-color: #0E2257;
            margin-top: 3rem;
        }
    }

`