import { Container, Title } from "./Habitos";
import Footer from "./Footer";
import Header from "./Header";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";


export default function Historico() {
    return (
        <Container>
            <Header></Header>
            <Title>
                <SectionTitle text={'Histórico'}>
                </SectionTitle>
            </Title>
            <Text>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </Text>
            <Footer></Footer>
        </Container>
    )
}

export const Text = styled.div`
    padding: 0 20px;
    font-size: 18px;
    line-height: 23px;
    color: #666666;
`