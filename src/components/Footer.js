import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
    return (
        <Container>
            <Link to='/habitos'>Hábitos</Link>
            <Link to='/hoje'><Today>Hoje</Today></Link>
            <Link to='/historico'>Histórico</Link>
        </Container>
    )
}

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