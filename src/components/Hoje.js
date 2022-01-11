import dayjs from "dayjs";
import "dayjs/locale/pt";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Container } from "./Habitos";
import Footer from "./Footer";
import Header from "./Header";
import SectionTitle from "./SectionTitle";
import { useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import TodayHabits from "./TodayHabits";
import { SectionHabits } from "./Habitos";
import styled from "styled-components";

export default function Hoje() {
    const { doneHabits, token, setTodayHabits} = useContext(UserContext);
    dayjs.extend(localizedFormat);
    const today = dayjs().locale('pt').format('dddd, DD/MM');
    
    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then(response => {
            setTodayHabits(response.data);
        });
        promise.catch(error => console.log(error.response));
    }, [])

    return (
        <Container>
            <Header></Header>
            <Title>
                <SectionTitle text={today}>
                </SectionTitle>
                {doneHabits === 0 
                ? <Done status={true}>Nenhum hábito concluído ainda</Done>
                : <Done status={false}>{Math.round(doneHabits)}% dos hábitos concluídos</Done>
                }
            </Title>
            <SectionHabits>
                {<TodayHabits/>}
            </SectionHabits>
            <Footer></Footer>
        </Container>
    )
}

const Done = styled.p`
    color: ${props => props.status ? '#BABABA' : '#8FC549'};
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 25px 0;
    & p {
        margin: 0;
        font-size: 18px;
    }
    & h1 {
        margin-bottom: 5px;
    }
`