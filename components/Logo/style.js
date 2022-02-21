import styled, { css } from 'styled-components';
import { col } from '../../style/helpers';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    width: ${col(10)};
    margin-left: ${col(1)};
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    svg {
        @media (max-width: 720px) {
            min-width: 30px;
            min-height: 30px;
        }
    }
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
    width: ${col(11)};
    `
)

export { StyledLogo, Logo__text, Wrapper }