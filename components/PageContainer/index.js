import AsideBar from '../AsideBar/index';
import { Container, MainContainer } from './style';

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