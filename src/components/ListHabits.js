import { useContext } from "react/cjs/react.development";
import UserContext from "../contexts/UserContext";
import Check from "../assets/check.svg";
import styled from "styled-components";
import axios from "axios";
import TodayHabits from "./TodayHabits";

export default function ListHabits() {
    const { todayHabits, setTodayHabits, token } = useContext(UserContext);

    function handlerCheck(status, id) {
        status ? uncheckHabit(id) : checkHabit(id);
    }

    function checkHabit(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then(response => {
            loadTodayHabits();
        });
    }

    function uncheckHabit(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then(response => {
            loadTodayHabits();
        });
    }

    function loadTodayHabits() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then(response => {
            setTodayHabits(response.data);
        });
        promise.catch(error => console.log(error.response));
    }

    return (
        <ul>
            {todayHabits.map(habit => {
                return (

                    <ItemHabit key={habit.id}>
                        <div>
                            <NameHabits>
                                {habit.name}
                            </NameHabits>
                            <ul>
                                <Sequence>
                                    <p>Sequência atual: {habit.currentSequence} dias</p>
                                </Sequence>
                                <Sequence>
                                    <p>Seu recorde: {habit.currentSequence} dias</p>
                                </Sequence>
                            </ul>

                        </div>
                        <DoneButton done={habit.done} onClick={() => handlerCheck(habit.done, habit.id)}>
                            <img src={Check} alt="Check"></img>
                        </DoneButton>
                    </ItemHabit>
                )
            })}
        </ul>
    )
}

const Sequence = styled.li`
    & p {
        font-size: 13px;
        margin: 0;
    }
`

const ItemHabit = styled.li`
    width: 100%;
    padding: 20px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NameHabits = styled.h1`
    font-size: 20px;
    color: #666666;
    margin: 0 0 10px 0;
`;

const DoneButton = styled.button`
    width: 70px;
    height: 70px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.done ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
`;