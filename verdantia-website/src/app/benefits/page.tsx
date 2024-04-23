import DetReqBlock from "../components/JDB/detReqBlock"
import DetailsBlock from "../components/JDB/detailsBlock"
import  InfoPanel  from "../components/JDB/infoPanel"
import JobDetailBlock from "../components/jobDetailBlock"
import { JobSubInfoBlock } from "../components/JDB/jobSubInfoBlock"
import ReqsBlock from "../components/JDB/requirementsBlock"
import TitleBlock from "../components/JDB/titleBlock"
import TopInfo from "../components/JDB/topInfo"
import TopLeftInfo from "../components/JDB/topLeftInfo"
import TopRightInfo from "../components/JDB/topRightInfo"
import LandingContent from "../components/landingContent";
import JobBlock from "../components/jobBlock";
import BodyHeading from "../components/bodyHeading";
import HandsPlanting from "../../public/images/handsPlanting.svg";
import PotDivider from "../../public/images/potDivider.png";
import ImageDivider from "../components/imageDivider";
import ValuesLeftTab from "../components/valuesLeftTab";
import ValuesRightTab from "../components/valuesRightTab";
import Slideshow from "../components/slideshow";
import BenSlide1 from "../../../public/images/BenSlide1.svg";
import BenSlide2 from "../../../public/images/BenSlide2.svg";
import BenSlide3 from "../../../public/images/BenSlide3.svg";
import doctor from "../../../public/images/doctor.svg";
import walkthrough from "../../../public/images/walkthrough.svg";

const slides = [
  {
    imageUrl: BenSlide1.src,
    heading: "Reforestation Initiatives",
    subheading: "\"30 per cent of emissions from industry and fossil fuels are soaked up by forests and woodlands. Yet every year the world loses 10 million hectares of forest. Deforestation and forest degradation accounts for 11 per cent of carbon emissions.\" - UN Environment Programme",
    description: "Verdantia has successfully planted over 500,000 trees in deforested regions, contributing to the restoration of critical ecosystems and providing habitat for various wildlife species.",
  },
  {
    imageUrl: BenSlide2.src,
    heading: "Carbon Neutrality Achieved",
    subheading: "\"A recently published report identified that 100 energy companies have been responsible for 71% of all industrial emissions since human-driven climate change was officially recognized.\" - National Resources Defense Council",
    description: "Through innovative technologies and sustainable practices, Verdantia has achieved carbon neutrality across its operations, making significant strides in reducing its carbon footprint.",
  },
  {
    imageUrl: BenSlide3.src,
    heading: "Eco-Education Outreach",
    subheading: "\"Environmental education is a process that allows individuals to explore environmental issues, engage in problem solving, and take action to improve the environment.\" - United States Environmental Protection Agency",
    description: "Verdantia's dedicated teams have conducted eco-education programs in local communities, reaching over 10,000 individuals and inspiring environmentally conscious practices.",
  },
];

export default function Jobs() {
    return (
      <main>
        <LandingContent
          heading="Career \nBenefits"
          subheading="Explore our opportunities"
        />
        <BodyHeading marginTop="18vh" marginBottom="7vh">Extensive Health Insurance Plans</BodyHeading>
        <div className="flex flex-row ml-[8vw] mr-[10vw]">
          <div style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '1.5vw', lineHeight: '2vw', marginRight: '15vw' }}>
          Join our team and enjoy the peace of mind that comes with our comprehensive insurance plan. Our coverage includes health, dental, and vision, with accessible premiums and flexible options tailored to your needs. With access to a vast network of healthcare providers and support services, your well-being is our priority. Explore the benefits of joining a company that values your health and happiness.
          </div>
          <img src={doctor.src} className="object-contain h-[50vh] w-[50vw]"></img>
        </div>

        <ImageDivider src={walkthrough.src} marginTop="18vh" marginBottom="20vh"></ImageDivider>

        <Slideshow slides = {slides}/>
        <div style={{marginBottom : "20vh"}}></div>
      </main>
    )
  }