import styled from 'styled-components';
import AsideBar from './AsideBar';
import {col} from '../style/helpers';
import Header from './Header';
import Preview from './Preview';

const Container = styled.div`
display: flex;
width: 100%;
min-height:100vh;
`

const MainContainer = styled.main`
width: ${col(23)};
`

export default function PageContainer ({children}) {
    return (
        <Container>
            <MainContainer>
              {children}
            </MainContainer>
            <AsideBar></AsideBar>
        </Container>
    );
}