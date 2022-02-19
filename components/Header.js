import Logo from './Logo';
import ItemsInfo from './ItemsInfo';
import styled from 'styled-components';

const  StyledHeader = styled.div`
display: flex;
`

export default function Header () {
    return (
        <StyledHeader>
            <Logo/>
            <ItemsInfo/>
        </StyledHeader>
    );
}