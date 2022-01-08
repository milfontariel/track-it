import styled from "styled-components"

export default function WeekDays() {
    return (
        <FormCreateHabit>
            <InputCreateHabit type='text' placeholder='nome do hábito'></InputCreateHabit>
            <InputWeekDays>
                <input type="checkbox" id="weekday-seg" className="weekday" />
                <label htmlFor="weekday-seg">S</label>
                <input type="checkbox" id="weekday-ter" className="weekday" />
                <label htmlFor="weekday-ter">T</label>
                <input type="checkbox" id="weekday-qua" className="weekday" />
                <label htmlFor="weekday-qua">Q</label>
                <input type="checkbox" id="weekday-qui" className="weekday" />
                <label htmlFor="weekday-qui">Q</label>
                <input type="checkbox" id="weekday-sex" className="weekday" />
                <label htmlFor="weekday-sex">S</label>
                <input type="checkbox" id="weekday-sab" className="weekday" />
                <label htmlFor="weekday-sab">S</label>
                <input type="checkbox" id="weekday-dom" className="weekday" />
                <label htmlFor="weekday-dom">D</label>
            </InputWeekDays>
            <Btns>
                <BtnCancel>Cancelar</BtnCancel>
                <BtnSave>Salvar</BtnSave>
            </Btns>
        </FormCreateHabit>

    )
}

const FormCreateHabit = styled.form`
    width: 100%;
    padding: 20px 20px;
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

const InputWeekDays = styled.div`

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