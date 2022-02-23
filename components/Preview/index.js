import { StyledPreview, Navigation, Title, Text, PreviewImg } from './style';

export default function Preview({children, title}) {
    return (
        <StyledPreview>
            <div className='previewInfo'>
                <Navigation>
                    <span className='previewInfo__main'>Главная</span>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M-0.000191274 10.6064L0.706915 11.3135L5.65666 6.36373L6.36377 5.65662L5.65666 4.94952L0.706915 -0.000232202L-0.000192139 0.706874L4.94956 5.65662L-0.000191274 10.6064Z" fill="#F6F6F6" />
                    </svg>
                    <span className='previewInfo__company'>{title}</span>
                </Navigation>
                <Title>{title}</Title>
                <Text>
                    {children}
                </Text>
            </div>
            <PreviewImg>
                <img src="/tanksSndSmokestacks.jpg" />
            </PreviewImg>
        </StyledPreview>
    );
}