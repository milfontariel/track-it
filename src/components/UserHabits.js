import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Trash from "../assets/delete.svg";

export default function UserHabits() {

    const arrayWeek = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

    const { token, habits, setHabits } = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then(response => {
            setHabits(response.data);
        });
        promise.catch(error => console.log(error.response));
    }, []);

    function deleteHabit(id) {
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }, {}
        );
        promise.then(response => {
            handlerLoad();
        });
        promise.catch(error => console.log('Deu ruim: ', error.response))
    }

    function handlerLoad() {

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        promise.then(response => {
            setHabits(response.data);
        });
        promise.catch(error => console.log(error.response));
    }

    if (habits.length !== 0) {
        return (
            <ul>
                {habits.map(habit => {
                    return (

                        <ItemHabit key={habit.id}>
                            <NameHabits>
                                {habit.name}
                            </NameHabits>
                            <HabitsWeekdays>
                                {arrayWeek.map(day => {
                                    let aux = [];
                                    habit.days.forEach(num => {
                                        aux.push(arrayWeek[parseInt(num) - 1]);
                                    });
                                    if (aux.includes(day)) {

                                        return (
                                            <div key={arrayWeek.indexOf(day)}>
                                                <input type="checkbox" id={day} className="weekday" disabled defaultChecked />
                                                <label htmlFor={day}>{`${day[0].toUpperCase()}`}</label>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={arrayWeek.indexOf(day)}>
                                                <input type="checkbox" id={day} disabled className="weekday" />
                                                <label htmlFor={day}>{`${day[0].toUpperCase()}`}</label>
                                            </div>
                                        )
                                    }
                                })}
                            </HabitsWeekdays>
                            <DeleteButton onClick={() => deleteHabit(habit.id)}>
                                <img src={Trash} alt="Delete"></img>
                            </DeleteButton>
                        </ItemHabit>
                    )
                })}
            </ul>
        )
    } else {
        return (
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </p>
        )
    }
}

const HabitsWeekdays = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 3px 0;
    
    & input {
        display: none !important;
    }
    
    & input[type=checkbox] + label {
        display: inline-block;
        border-radius: 6px;
        background: none;
        border: 2px solid #CFCFCF;
        height: 35px;
        width: 30px;
        margin-right: 3px;
        line-height: 35px;
        text-align: center;
        color: #CFCFCF;
    }
    
    & input[type=checkbox]:checked + label {
        background: #CFCFCF;
        color: #fff;
    }
    
    `


const ItemHabit = styled.li`
    width: 100%;
    padding: 20px 20px;
    margin-bottom: 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
`

const NameHabits = styled.h1`
    font-size: 20px;
    color: #666666;
    margin: 0 0 10px 0;
`;

const DeleteButton = styled.button`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;