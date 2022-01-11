import { useContext } from 'react';
import styled from 'styled-components';
import LogoP from '../assets/logo_p.svg';
import UserContext from '../contexts/UserContext';

export default function Header() {
    const { userData } = useContext(UserContext);
    
    return (
        <Container>
            <img src={LogoP} alt="Logo TrackIt" />
            <Profile image={userData.image}></Profile>
        </Container>
    )
}

const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: ${props => `url(${props.image})`};
    background-color: #ff0;
    background-size: cover;
    background-position: center center;
    `

const Container = styled.div`
    background-color: #126BA5;
    color: #fff;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
`