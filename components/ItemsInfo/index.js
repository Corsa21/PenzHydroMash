import { StyledItemsInfo } from './style';
import Link from 'next/link'

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