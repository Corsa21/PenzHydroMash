import { StyledLogo, Logo__text, Wrapper } from "./style";

export default function Logo() {
    return (
        <Wrapper>
            <StyledLogo>
                <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.375 38H0V0H16.8409V10.3636H11.375L19.5 17.2727L27.625 10.3636H22.1591V0H39V38H27.625V22.4545L19.5 29.3636L11.375 22.4545V38Z" fill="#F6F6F6" />
                </svg>
                <Logo__text>ПензГидроМаш</Logo__text>
            </StyledLogo>
        </Wrapper>
    );
}