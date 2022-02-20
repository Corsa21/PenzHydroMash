import styled, {css} from 'styled-components';
import {col} from '../../style/helpers';

const AsideContainer = styled.section(
    ({theme}) => css`
    position: relative;
    z-index: 3;
    background: ${theme.colors.grey1};
    width: ${col(1)};

    @media (max-width:720px){
        display: none;
    }
`)

export { AsideContainer }