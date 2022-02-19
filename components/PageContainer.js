import styled from 'styled-components';
import AsideBar from './AsideBar';
import {col} from '../style/helpers';
import Logo from '../components/Logo'

const Container = styled.div`
display: flex;
width: 100%;
min-height:100vh;
`

const MainContainer = styled.main`
width: ${col(23)};
`

export default function PageContainer () {
    return (
        <Container>
            <MainContainer>
            <Logo/>
            </MainContainer>
            <AsideBar></AsideBar>
        </Container>
    );
}