import axios from 'axios';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import LogoP from '../assets/logo_p.svg';
import UserContext from '../contexts/UserContext';
import WeekDays from './WeekDays';

export default function Habitos() {
    const { userData, token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    promise.then(response => setHabits(response.data));
    promise.catch(error => console.log(error.response));

    const [status, setStatus] = useState(false);

    function handleCreate(e){
        e.preventDefault();

        setStatus(true);



    }

    return (
        <Container>
            <Header>
                <img src={LogoP} alt="Logo TrackIt" />
                <Profile image={userData.image}></Profile>
            </Header>
            <SectionTitle>
                <h1>Meus Hábitos</h1>
                <AddBtn onClick={handleCreate}>+</AddBtn>
            </SectionTitle>
            <SectionHabits>
                {status !== false ? <WeekDays/> : ''}
                {habits.length === 0 ?
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                        para começar a trackear!
                    </p>
                    : ``
                }

            </SectionHabits>
            <Footer>
                <Link to='/habitos'>Hábitos</Link>
                <Link to='/hoje'><Today>Hoje</Today></Link>
                <Link to='/historico'>Histórico</Link>
            </Footer>
        </Container>
    );
}

const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: ${props => `url(${props.image})`};
    background-color: #ff0;
    background-size: cover;
`

const SectionHabits = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
    & p {
        font-size: 18px;
        line-height: 23px;
        color: #666666;
    }
`
const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 25px 0;
`
const AddBtn = styled.button`
    background-color: #52B6FF;
    border-style: none;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    color: #fff;
    font-size: 27px;
`

const Today = styled.button`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    color: #fff;
    border-style: none;
    font-size: 18px;
    position: absolute;
    bottom: 10px;
    left: calc((100vw - 91px) / 2);
    cursor: pointer;
`

const Footer = styled.div`
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
    & a {
        font-size: 18px;
        color: #52B6FF;
        text-decoration: none;
    }
`

const Header = styled.div`
    background-color: #126BA5;
    color: #fff;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    background-color: #F2f2f2;
    width: 100vw;
    height: calc(100vh - 140px);
    margin: 70px 0 70px 0;
`;