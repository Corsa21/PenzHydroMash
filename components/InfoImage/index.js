import { InfoImageContainer, InfoImagePicture, InfoImageText } from "./style";

const InfoImage = (props) => {

  const { src, children } = props;

  return (
    <InfoImageContainer>
      <InfoImagePicture src={src} />
      <InfoImageText>
        {children}
      </InfoImageText>
    </InfoImageContainer>
  )
}



export default InfoImage;