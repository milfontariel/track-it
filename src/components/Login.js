import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import LogoG from '../assets/logo_g.svg';
import UserContext from '../contexts/UserContext';
import Content from './Content';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken, setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);

    function handlerLogin(e) {
        e.preventDefault();
        setLoginStatus(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email, password
        });
        promise.then(response => {
            setUserData(response.data);
            setToken(response.data.token);
            navigate('/hoje');
            setLoginStatus(false);
        });
        promise.catch(error => {
            setLoginStatus(false);
            alert(error.response.data.message);
        });
    }

    return (
        <Container>
            <img src={LogoG} alt='Logo TrackIt' />
            <Form onSubmit={handlerLogin}>
                <Input disabled={loginStatus} type='email' value={email} placeholder='email' onChange={
                    (e) => setEmail(e.target.value)
                }></Input>
                <Input disabled={loginStatus} type='password' value={password} placeholder='senha' onChange={
                    (e) => setPassword(e.target.value)
                }></Input>
                <Button status={loginStatus} disabled={loginStatus} type='submit'>
                    <Content status={loginStatus}></Content>
                </Button>
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
    height: 50px;
    padding: 10px;
    font-size: 21px;
    background-color: ${props => props.status ? '#86CCFF': '#52B6FF'};
    border: none;
    border-radius: 5px;
    color: #fff;
    &:hover{
        cursor: pointer;
    }
    & div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & div svg {
        width: 30px;
        height: 23px;
    }
`