import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import WeekDays from './WeekDays';
import UserHabits from './UserHabits';
import Footer from './Footer';
import SectionTitle from './SectionTitle';
import Header from './Header';

export default function Habitos() {
    const { setStatus } = useContext(UserContext);

    function handleCreate(e) {
        e.preventDefault();
        setStatus(true);
    }

    return (
        <Container>
            <Header></Header>
            <Title>
                <SectionTitle text={'Meus Hábitos'}>
                </SectionTitle>
                    <AddBtn onClick={handleCreate}><p>+</p></AddBtn>
            </Title>
            <SectionHabits>
                <WeekDays />
                <UserHabits />
            </SectionHabits>
            <Footer></Footer>
        </Container>
    );
}

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 25px 0;
    `


export const SectionHabits = styled.div`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    & p {
        font-size: 18px;
        line-height: 23px;
        color: #666666;
    }
    `
export const AddBtn = styled.button`
    background-color: #52B6FF;
    border-style: none;
    border-radius: 5px;
    width: 40px;
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    & p {
        color: #fff;
        font-size: 27px;
        margin: 0;
    }
    `
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    background-color: #f2f2f2;
    width: 100vw;
    height: calc(100vh - 140px);
    margin: 70px 0 70px 0;
    overflow-y: scroll;
    `