import styled, {css} from 'styled-components';
import {col} from '../style/helpers';

const AsideContainer = styled.section(
    ({theme}) => css`
    background: ${theme.colors.grey1};
    width: ${col(1)};
`
)

export default function AsideBar () {
    return (
        <AsideContainer>123</AsideContainer>
    );
}