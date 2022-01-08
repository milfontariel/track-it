import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoG from '../assets/logo_g.svg';

export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function handlerRegister(e) {
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email, name, image, password
        });
        promise.then(navigate('/'));
        promise.catch(error => alert(error.response.data.message));
    }


    return (
        <Container>
            <img src={LogoG} alt='Logo TrackIt' />
            <Form onSubmit={handlerRegister}>
                <Input type='email' value={email} placeholder='email' onChange={
                    (e) => setEmail(e.target.value)
                }></Input>
                <Input type='password' value={password} placeholder='senha' onChange={
                    (e) => setPassword(e.target.value)
                }></Input>
                <Input type='text' value={name} placeholder='nome' onChange={
                    (e) => setName(e.target.value)
                }></Input>
                <Input type='text' value={image} placeholder='foto' onChange={
                    (e) => setImage(e.target.value)
                }></Input>
                <Button type='submit'>Cadastrar</Button>
                <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
`;
const Input = styled.input`
    width: 300px;
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
    width: 300px;
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