import dayjs from "dayjs";
import "dayjs/locale/pt";
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Container, Title } from "./Habitos";
import Footer from "./Footer";
import Header from "./Header";
import SectionTitle from "./SectionTitle";
import { useContext, useEffect } from "react/cjs/react.development";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import TodayHabits from "./TodayHabits";
import { SectionHabits } from "./Habitos";

export default function Hoje() {
    const { token, setTodayHabits} = useContext(UserContext);
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
            </Title>
            <SectionHabits>
                {<TodayHabits/>}
            </SectionHabits>
            <Footer></Footer>
        </Container>
    )
}