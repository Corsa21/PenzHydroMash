import PageContainer from "../components/PageContainer/index";
import Header from "../components/Header/index";
import Preview from "../components/Preview/index";
import InfoBlock from "../components/Infoblock";
import InfoImage from "../components/InfoImage";
import InfoSlider from "../components/InfoSlider";
import data from '../data.json';






export default function Home(props) {
  console.log({props})
  const {preview, aboutUs, infoImage, transport} = props;
  return (
    <PageContainer>
      <Header />
      <Preview title={preview.title}>
        {preview.text}
      </Preview>
      <InfoBlock title={aboutUs.title}>
        {aboutUs.text}
      </InfoBlock>
      <InfoImage src={infoImage.src}>
        {infoImage.text.map((item, index)=><p key={index}>{item}</p>)}
      </InfoImage>
      <InfoBlock title={transport.title}/>
      <InfoSlider slides={transport.slides}/>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const props = data
  return {props} 
}
