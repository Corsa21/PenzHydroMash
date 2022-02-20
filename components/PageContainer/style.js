import styled from 'styled-components';
import {col} from '../../style/helpers';


const Container = styled.div`
display: flex;
width: 100%;
min-height:100vh;
`

const MainContainer = styled.main`
width: ${col(23)};

@media (max-width:720px){
    width: ${col(24)};
}
`

export { Container, MainContainer }