import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoP from '../assets/logo_p.svg';

export default function Habitos() {
    return (
        <Container>
            <Header>
                <img src={LogoP} alt="Logo TrackIt" />
            </Header>
            <SectionTitle>
                <h1>Meus Hábitos</h1>
                <AddBtn>+</AddBtn>
            </SectionTitle>
            <SectionHabits>
                <FormCreateHabit>
                    <InputCreateHabit type='text' placeholder='nome do hábito'></InputCreateHabit>
                    <InputWeekDays>
                        <input type="checkbox" id="weekday-seg" className="weekday" />
                        <label for="weekday-seg">S</label>
                        <input type="checkbox" id="weekday-ter" className="weekday" />
                        <label for="weekday-ter">T</label>
                        <input type="checkbox" id="weekday-qua" className="weekday" />
                        <label for="weekday-qua">Q</label>
                        <input type="checkbox" id="weekday-qui" className="weekday" />
                        <label for="weekday-qui">Q</label>
                        <input type="checkbox" id="weekday-sex" className="weekday" />
                        <label for="weekday-sex">S</label>
                        <input type="checkbox" id="weekday-sab" className="weekday" />
                        <label for="weekday-sab">S</label>
                        <input type="checkbox" id="weekday-dom" className="weekday" />
                        <label for="weekday-dom">D</label>
                    </InputWeekDays>
                    <Btns>
                        <BtnCancel>Cancelar</BtnCancel>
                        <BtnSave>Salvar</BtnSave>
                    </Btns>
                </FormCreateHabit>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                    para começar a trackear!
                </p>
            </SectionHabits>
            <Footer>
                <Link to='/'>Hábitos</Link>
                <Today>Hoje</Today>
                <Link to='/'>Histórico</Link>
            </Footer>
        </Container>
    );
}

/* FORM CREATE HABIT */

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
/* ***************** */

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