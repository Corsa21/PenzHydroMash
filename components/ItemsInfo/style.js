import styled, { css } from 'styled-components';
import { col } from '../../style/helpers';
import theme from '../../style/theme';

const StyledItemsInfo = styled.div(
    ({ theme }) => css`
    display: flex;
    align-items: center;
    width: ${col(12)};

    .items {
        display: flex;
        gap: ${col(1)} ;
        position: relative;
        z-index: 3;
        width: 100%;
        margin-left: ${col(1)};
        margin-right: ${col(1)};

        @media (max-width: 1700px) {
            gap: ${col(0.75)}
        }
        
        @media (max-width: 1450px) {
            gap: ${col(0.5)}
        }

        @media (max-width: 1300px) {
            gap: ${col(0.25)};
            margin-left: ${col(0.5)};
            margin-right: ${col(0.5)};
        }

        @media (max-width: 1024px) {
            margin-left: ${col(0.25)};
            margin-right: ${col(0.25)};
        }

        @media (max-width: 800px) {
            margin-left: 0;
            margin-right: 0;
            gap: ${col(0.1)};
        }
    }

    .item {
        list-style-type: none;
    }

    .item__link {
        text-decoration: none;
        color: ${theme.colors.secondary};
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #F6F6F6;
        opacity: 0.5;
    }

    @media (max-width:720px){
        display: none;
    }
`
)

export { StyledItemsInfo }