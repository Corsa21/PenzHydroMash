import styled, {css} from 'styled-components';
import {col} from '../style/helpers';
import BurgerButton from "./BurgerButton";

const AsideContainer = styled.section(
    ({theme}) => css`
    position: relative;
    z-index: 3;
    background: ${theme.colors.grey1};
    width: ${col(1)};
`)



export default function AsideBar () {
    return (
        <AsideContainer>
            <BurgerButton/>
        </AsideContainer>
    );
}