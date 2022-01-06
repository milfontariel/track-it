import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoG from '../assets/logo_g.svg';

export default function Login() {
    return (
        <Container>
            <img src={LogoG} alt='Logo TrackIt' />
            <Form>
                <Input type='email' placeholder='Email'></Input>
                <Input type='password' placeholder='Senha'></Input>
                <Button type='submit'>Entrar</Button>
                <Link to='/'><p>Não tem uma conta? Cadastre-se!</p></Link>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`
const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-style: none;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    &::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }
`
const Form = styled.form`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
    align-items: center;
    & p {
        text-decoration: none;
        color: #52B6FF;
        font-size: 14px;
        margin-top: 25px;
    }
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 21px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #fff;
    &:hover{
        cursor: pointer;
    }
`