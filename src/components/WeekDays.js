import axios from "axios";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import UserContext from '../contexts/UserContext';
import { useContext } from "react";

export default function WeekDays() {

    const arrayWeek = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
    const { token, status, setStatus, setHabits } = useContext(UserContext);

    const [selectedDays, setSelectedDays] = useState([]);
    const [nameHabit, setNameHabit] = useState('');
    let days = [];

    function handlerCheck(e, day) {
        const aux = [...selectedDays];
        aux.includes(day)
            ? aux.splice(aux.indexOf(day), 1)
            : aux.push(day);
        setSelectedDays(aux);
    }
    function postHabit(e) {
        e.preventDefault();
        arrayWeek.forEach(day => {
            if (selectedDays.includes(day)) {
                days.push(arrayWeek.indexOf(day) + 1)
            }
        })
        if (days.length === 0) {
            alert("Selecione pelo menos 1 dia");
            return
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            name: nameHabit,
            days: days
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        promise.then(() => {
            setStatus(false);
            setSelectedDays([]);
            handlerLoad();
            days = [];
        });
        promise.catch(error => console.log(error.response));

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

    function handlerCancel() {
        setStatus(false);
    }
    if (status !== false) {

        return (
            <FormCreateHabit onSubmit={postHabit}>
                <InputCreateHabit type='text' placeholder='nome do hábito'
                    onChange={e => setNameHabit(e.target.value)}>
                </InputCreateHabit>
                <InputWeekDays>
                    {arrayWeek.map(day => {
                        return (
                            <li key={arrayWeek.indexOf(day)}>
                                <input type="checkbox" onChange={e => handlerCheck(e, day)} id={day} className="weekday" />
                                <label htmlFor={day}>{`${day[0].toUpperCase()}`}</label>
                            </li>
                        )
                    })}
                </InputWeekDays>
                <Btns>
                    <BtnCancel onClick={handlerCancel}>Cancelar</BtnCancel>
                    <BtnSave type="submit">Salvar</BtnSave>
                </Btns>
            </FormCreateHabit>

        )
    } else {
        return ''
    }
}

const FormCreateHabit = styled.form`
    width: 100%;
    padding: 20px 20px;
    margin-bottom: 20px;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    gap: 10px;
`

const InputCreateHabit = styled.input`
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border-style: none;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    &::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }
`
const Btns = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;
`
const BtnCancel = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #FFF;
    border: none;
    border-radius: 5px;
    color: #52B6FF;
    &:hover{
        cursor: pointer;
    }
`
const BtnSave = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #fff;
    &:hover{
        cursor: pointer;
    }
`

const InputWeekDays = styled.ul`
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
        cursor: pointer;
        color: #CFCFCF;
    }

    & input[type=checkbox]:checked + label {
        background: #CFCFCF;
        color: #fff;
    }

`