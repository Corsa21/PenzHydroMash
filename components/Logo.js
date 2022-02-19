import styled, { css } from 'styled-components';
import {col} from '../style/helpers';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    width: ${col(10)};
    margin-left: ${col(1)};
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

const Logo__text = styled.div(
    ({ theme }) => css`
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: ${col(0.25)};
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.grey2};
    `
)

const Wrapper = styled.div(
    ({ theme }) => css`
    position: relative;
    z-index: 3;
    background: ${theme.colors.primary};
    width: ${col(11)};
    `
)



export default function Logo() {
    return (
        <Wrapper>
            <StyledLogo>
                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.375 38H0V0H16.8409V10.3636H11.375L19.5 17.2727L27.625 10.3636H22.1591V0H39V38H27.625V22.4545L19.5 29.3636L11.375 22.4545V38Z" fill="#F6F6F6" />
                </svg>
                <Logo__text>ПензГидроМаш</Logo__text>
            </StyledLogo>
        </Wrapper>
    );
}