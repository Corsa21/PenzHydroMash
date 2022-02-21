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

        @media (max-width: 720px) {
            width: ${col(24)};
        }
    }

    
    .previewInfo__main {
        margin-right: 10px;
    }

    .previewInfo__company {
        margin-left: 10px;
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
        padding-top: 120px;
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

    @media (max-width:1024px){
        font-size:64px;
    }

    @media (max-width:720px){
        font-size:40px;
        margin-bottom: 0;
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
        font-size: 16px;
        padding-top: 30px;
        padding-bottom: 60px;
        border:none;
    }
`
)

const PreviewImg = styled.div(
    ({theme}) =>`
    z-index: 2;
    overflow: hidden;
    width: ${col(12)};

    @media (max-width: 720px) {
        width: ${col(24)};
        overflow: visible;
    }

    img {
        margin-left: -930px;
        min-height: 984.8px;
        object-fit: cover;

        @media (max-width: 720px) {
            width: 100%;   
            min-height: 423px;
            margin-left:0;
        }

        @media (min-width:1920px) {
            margin-left: 0;
        }
    }
`
)


export { StyledPreview, Navigation, Title, Text, PreviewImg }