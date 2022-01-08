import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import LogoG from '../assets/logo_g.svg';
import UserContext from '../contexts/UserContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setToken, setUserData} = useContext(UserContext);
    const navigate = useNavigate();

    function handlerLogin(e){
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email, password
        });
        promise.then(response => {
            setUserData(response.data);
            setToken(response.data.token);
            navigate('/habitos');
        });
        promise.catch(error => alert(error.response.data.message));
    }

    return (
        <Container>
            <img src={LogoG} alt='Logo TrackIt' />
            <Form onSubmit={handlerLogin}>
                <Input type='email' value={email} placeholder='email' onChange={
                    (e) => setEmail(e.target.value)
                }></Input>
                <Input type='password' value={password} placeholder='senha' onChange={
                    (e) => setPassword(e.target.value)
                }></Input>
                <Button type='submit'>Entrar</Button>
                <Link to='/cadastro'><p>Não tem uma conta? Cadastre-se!</p></Link>
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