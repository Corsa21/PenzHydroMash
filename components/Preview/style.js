import styled, { css } from 'styled-components';
import theme from '../../style/theme';
import { col, vh } from '../../style/helpers';

const StyledPreview = styled.div(
    ({ theme }) => css`
    display: flex;
    height: 800px;
      
      .previewInfo {
        position: relative;
        z-index: 3;
        background: ${theme.colors.primary};
        width: ${col(11)};
    }

    
    .previewInfo__main {
        margin-right: 10px;
    }

    .previewInfo__company {
        margin-left: 10px;
    }

    .previewImg {
        z-index: 2;
        overflow: hidden;
        width: ${col(12)};
    }

    .previewImg img {
        margin-left: -930px;
        min-height: 984.8px;
    }

    @media (max-width:720px){
        flex-direction: column;
    }

`
)

const Navigation = styled.div(
    ({theme}) =>`
    display: flex;
    align-items: center;
    margin-left: ${col(1)};
    padding-top: 230px;
    font-size: 14px;
    line-height: 160%;
    color: ${theme.colors.grey2};
    opacity: 0.5;

    @media (max-width:720px){
        font-size:12px;
    }
`
)

const Title = styled.div(
    ({theme}) =>`
    margin-left: ${col(1)};
    margin-top: 20px;
    font-weight: 500;
    font-size: 84px;
    line-height: 100%;
    color: ${theme.colors.grey2};
    margin-bottom: 195px;

    @media (max-width:720px){
        font-size:40px;
    }
`
)

const Text = styled.div(
    ({theme}) =>`
    padding: 48px ${col(1)};
    font-size: 25px;
    line-height: 160%;
    color: ${theme.colors.grey2};
    border-top: 1px solid ${theme.colors.grey1};

    @media (max-width:1000px) {
        font-size: 20px;
    }

    @media (max-width:800px) {
        font-size: 18px;
    }

    @media (max-width:720px){
        font-size: 16px
    }
`
)

const PreviewImg = styled.div(
    ({theme}) =>`
    z-index: 2;
    overflow: hidden;
    width: ${col(12)};

    img {
        margin-left: -930px;
        min-height: 984.8px;
    }
`
)


export { StyledPreview, Navigation, Title, Text, PreviewImg }