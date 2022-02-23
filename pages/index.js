import PageContainer from "../components/PageContainer/index";
import Header from "../components/Header/index";
import Preview from "../components/Preview/index";
import InfoBlock from "../components/Infoblock";
import InfoImage from "../components/InfoImage";
import InfoSlider from "../components/InfoSlider";
import data from '../data.json';






export default function Home(props) {
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
  let props;
  try {
    //ссылка к файлу data.json на гитхабе
    const response = await fetch('https://cdn.statically.io/gh/Corsa21/PenzHydroMash/main/data.json');
    props = await response.json();
  }
  catch {
    props = data
  }
  
  return {props} 
}
