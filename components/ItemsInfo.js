import styled, { css } from 'styled-components';
import {col} from '../style/helpers';
import Link from 'next/link'
import theme from '../style/theme';

const StyledItemsInfo = styled.div(
    ({theme}) => css`
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

    

`
)

export default function ItemsInfo() {
    return (
        <StyledItemsInfo>
            <ul className='items'>
                <li className='item'><Link href="/"><a className='item__link'>компания</a></Link></li>
                <li className='item'><Link href="/"><a className='item__link'>продукты и услуги</a></Link></li>
                <li className='item'><Link href="/"><a className='item__link'>проекты</a></Link></li>
                <li className='item'><Link href="/"><a className='item__link'>новости</a></Link></li>
                <li className='item'><Link href="/"><a className='item__link'>контакты</a></Link></li>
            </ul>
        </StyledItemsInfo>
    );
}