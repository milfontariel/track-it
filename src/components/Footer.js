import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react/cjs/react.development";
import UserContext from "../contexts/UserContext";

export default function Footer() {
    const { doneHabits } = useContext(UserContext);

    return (
        <Container>
            <Link to='/habitos'>Hábitos</Link>
            <Link to='/hoje'>
                <Today>
                    <CircularProgressbar value={Math.round(doneHabits)} text="Hoje"
                        styles={{
                            text: {
                                fontSize: "22px",
                                fill: '#fff'
                            },
                            path: {
                                stroke: '#fff'
                            },
                            trail: {
                                stroke: 'none'
                            }
                        }}
                    />
                </Today>
            </Link>
            <Link to='/historico'>Histórico</Link>
        </Container>
    )
}

const Today = styled.button`
    border-style: none;
    position: absolute;
    bottom: 10px;
    left: calc((100vw - 91px) / 2);
    height: 91px;
    width: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    cursor: pointer;
`

const Container = styled.div`
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