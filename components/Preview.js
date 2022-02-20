import styled, { css } from 'styled-components';
import theme from '../style/theme';
import {col, vh} from '../style/helpers';

const  StyledPreview = styled.div(
    ({theme}) => css`
    display: flex;
    height: 800px;
      
      .previewInfo {
        position: relative;
        z-index: 3;
        background: ${theme.colors.primary};
        width: ${col(11)};
    }

    .previewInfo__navigation {
        display: flex;
        align-items: center;
        margin-left: ${col(1)};
        padding-top: 230px;
        font-weight: 300;
        font-size: 14px;
        line-height: 160%;
        color: ${theme.colors.grey2};
        opacity: 0.5;
    }

    .previewInfo__main {
        margin-right: 10px;
    }

    .previewInfo__company {
        margin-left: 10px;
    }

    .preview__title {
        margin-left: ${col(1)};
        margin-top: 20px;
        font-weight: 500;
        font-size: 84px;
        line-height: 100%;
        color: ${theme.colors.grey2};
        margin-bottom: 195px;
    }

    .preview__text {
        padding: 48px ${col(1)};
      
        font-weight: 300;
        font-size: 25px;
        line-height: 160%;
        color: ${theme.colors.grey2};
      
        border-top: 1px solid ${theme.colors.grey1};
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

`
)

export default function Preview () {
    return (
        <StyledPreview>
            <div className='previewInfo'>
                <div className='previewInfo__navigation'>
                    <span className='previewInfo__main'>Главная</span>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M-0.000191274 10.6064L0.706915 11.3135L5.65666 6.36373L6.36377 5.65662L5.65666 4.94952L0.706915 -0.000232202L-0.000192139 0.706874L4.94956 5.65662L-0.000191274 10.6064Z" fill="#F6F6F6"/>
                    </svg>
                    <span className='previewInfo__company'>Компания</span>
                </div>
                <div className='preview__title'>Компания</div>
                <div className='preview__text'>
                Основная сфера деятельности &laquo;ПензГидромаш&raquo;&nbsp;&mdash; создание систем для нефтяной, газовой, химической и&nbsp;нефтехимической сфер промышленности.
                </div>
            </div>
            <div className='previewImg'>
                <img src="/tanksSndSmokestacks.jpg"/>
            </div>
        </StyledPreview>
    );
}