import { InfoblockContainer, InfoblockTitle, InfoblockText } from "./style";


const InfoBlock = (props) => {

  const { title, children } = props


  return (
    <InfoblockContainer>
      <InfoblockTitle>{title}</InfoblockTitle>
      {children && <InfoblockText>{children}</InfoblockText>}
    </InfoblockContainer>
  )
}


export default InfoBlock;