import DetReqBlock from "./components/JDB/detReqBlock"
import DetailsBlock from "./components/JDB/detailsBlock"
import  InfoPanel  from "./components/JDB/infoPanel"
import JobDetailBlock from "./components/jobDetailBlock"
import { JobSubInfoBlock } from "./components/JDB/jobSubInfoBlock"
import ReqsBlock from "./components/JDB/requirementsBlock"
import TitleBlock from "./components/JDB/titleBlock"
import TopInfo from "./components/JDB/topInfo"
import TopLeftInfo from "./components/JDB/topLeftInfo"
import TopRightInfo from "./components/JDB/topRightInfo"
import LandingContent from "./components/landingContent";
import JobBlock from "./components/jobBlock";
import BodyHeading from "./components/bodyHeading";
import HandsPlanting from "../../public/images/handsPlanting.svg";
import PotDivider from "../../public/images/potDivider.png";
import ImageDivider from "./components/imageDivider";
import ValuesLeftTab from "./components/valuesLeftTab";
import ValuesRightTab from "./components/valuesRightTab";
import ForestDivider from "../../public/images/forestDivider.png";
import Slideshow from "./components/slideshow";
import Slide1 from "../../public/images/Slide1.svg";
import Slide2 from "../../public/images/Slide2.svg";
import Slide3 from "../../public/images/Slide3.svg";
import Slide4 from "../../public/images/Slide4.svg";
import Slide5 from "../../public/images/Slide5.svg";

const slides = [
  {
    imageUrl: Slide1.src,
    heading: "Reforestation Initiatives",
    subheading: "\"30 per cent of emissions from industry and fossil fuels are soaked up by forests and woodlands. Yet every year the world loses 10 million hectares of forest. Deforestation and forest degradation accounts for 11 per cent of carbon emissions.\" - UN Environment Programme",
    description: "Verdantia has successfully planted over 500,000 trees in deforested regions, contributing to the restoration of critical ecosystems and providing habitat for various wildlife species.",
  },
  {
    imageUrl: Slide2.src,
    heading: "Carbon Neutrality Achieved",
    subheading: "\"A recently published report identified that 100 energy companies have been responsible for 71% of all industrial emissions since human-driven climate change was officially recognized.\" - National Resources Defense Council",
    description: "Through innovative technologies and sustainable practices, Verdantia has achieved carbon neutrality across its operations, making significant strides in reducing its carbon footprint.",
  },
  {
    imageUrl: Slide3.src,
    heading: "Eco-Education Outreach",
    subheading: "\"Environmental education is a process that allows individuals to explore environmental issues, engage in problem solving, and take action to improve the environment.\" - United States Environmental Protection Agency",
    description: "Verdantia's dedicated teams have conducted eco-education programs in local communities, reaching over 10,000 individuals and inspiring environmentally conscious practices.",
  },
  {
    imageUrl: Slide4.src,
    heading: "Smart City Collaboration",
    subheading: "\"Digitalisation and smart controls can reduce emissions from buildings by 350 Mt CO2 by 2050.\" - International Energy Agency",
    description: "Verdantia's smart city solutions with progressive municipalities have lowered energy usage, enhanced waste management efficiency, and elevated urban sustainability.",
  },
  {
    imageUrl: Slide5.src,
    heading: "Biodiversity Conservation",
    subheading: "\"The World Wide Fund for Nature’s Living Planet Report 2022 documents a 69% average loss in the abundance of mammal, bird, reptile, fish and amphibian species since 1970.\" - The London School of Economics and Political Science",
    description: "Verdantia actively supports biodiversity conservation efforts by protecting endangered species and preserving vital habitats.",
  }
];

export default function Home() {
  return (
    <main>
      <LandingContent
        heading="Welcome to \nVerdantia"
        subheading="Where Sustainability meets Innovation"
        buttonText="Join the Team"
      />

      <JobDetailBlock
        job="Environmental Scientist"
        date="Posted 3 days ago"
        applicants="35 applicants"
        location = "San Francisco, CA"
        workExperience="Entry Level"
        workType="Remote"
        salary="$70,000"
        detDesc="Lorem ipsum dolor sit amet consectetur. Tellus mattis in dictum placerat. Imperdiet mauris in ultrices metus adipiscing vitae. Massa ut dui arcu cursus facilisis. Sed eget sem vitae amet."
        reqDesc="Lorem ipsum dolor sit amet consectetur. Tellus mattis in dictum placerat. Imperdiet mauris in ultrices metus adipiscing vitae. Massa ut dui arcu cursus facilisis. Sed eget sem vitae amet."
        imgSrc="./components/EnvScientist.png"
      />

      <BodyHeading marginTop="8vw" marginBottom="2vw">Featured Jobs</BodyHeading>

      <div className="container mx-auto py-5 px-6 text-white relative z-10 overflow-x-auto flex gap-[5vw]">
        <JobBlock
          applicantCount="178 Applicants"
          className="!h-[204px] !shadow-[unset] !w-[403px] !mr-[20px]" // Adjust width and margin as needed
          data="3 Days ago"
          frameClassName="!mr-[-9.22px]"
          jobTitle="Environmental Scientist"
          layerClassName="!h-[19px] !mt[[unset] !ml-[unset] !mb-[unset] !w-[17.56px]"
          location="San Francisco, CA"
          workMethod="Remote"
        />
        <JobBlock
          applicantCount="178 Applicants"
          className="!h-[204px] !shadow-[unset] !w-[403px] !mr-[20px]" // Adjust width and margin as needed
          data="3 Days ago"
          frameClassName="!mr-[-9.22px]"
          jobTitle="Environmental Scientist"
          layerClassName="!h-[19px] !mt[[unset] !ml-[unset] !mb-[unset] !w-[17.56px]"
          location="San Francisco, CA"
          workMethod="Remote"
        />
        <JobBlock
          applicantCount="178 Applicants"
          className="!h-[204px] !shadow-[unset] !w-[403px] !mr-[20px]" // Adjust width and margin as needed
          data="3 Days ago"
          frameClassName="!mr-[-9.22px]"
          jobTitle="Environmental Scientist"
          layerClassName="!h-[19px] !mt[[unset] !ml-[unset] !mb-[unset] !w-[17.56px]"
          location="San Francisco, CA"
          workMethod="Remote"
        />
      </div>

      <BodyHeading marginTop="3vw">Our Mission</BodyHeading>

      <div className="flex items-center ml-[8vw] mr-[8vw]" style={{ fontFamily: 'Montserrat', fontWeight: 300, color: '#3E3E3E', fontSize: '1.5vw', lineHeight: '2.25vw' }}>
        <div className="mr-[10vw]">
          At Verdantia, our mission is to revolutionize <strong>environmental sustainability</strong> by seamlessly integrating technology and human impact. We believe in a holistic approach, leveraging <strong>cutting-edge innovations</strong> alongside direct, hands-on efforts to create a more <strong>sustainable and resilient future</strong> for our planet.
        </div>
        <img src={HandsPlanting.src} alt="Hands Planting" className="w-[40vw] h-auto" />
      </div>

      <ImageDivider src={PotDivider.src} marginTop="6vw"></ImageDivider>

      <BodyHeading marginTop="4vw" marginBottom="3vw">Our Values</BodyHeading>

      <ValuesLeftTab
        title = "01 - Environmental Awareness"
        subheading = "We inspire positive change through mindful environmental awareness and education."
        iconSrc= "/images/Values1.svg"
      />

      <ValuesRightTab
        title = "02 - Collaboration"
        subheading = "We thrive using collaboration, leveraging its power for meaningful change in sustainability."
        iconSrc= "/images/Values2.svg"
      />

      <ValuesLeftTab
        title = "03 - Leadership"
        subheading = "Guided by visionary leadership, we aim to inspire a sustainable future through innovation and determination."
        iconSrc= "/images/Values3.svg"
      />

      <ValuesRightTab
        title = "04 - Responsibility"
        subheading = "Responsibility is central to Verdantia, guiding decisions with integrity as well as transparency for sustainable initiatives."
        iconSrc= "/images/Values4.svg"
        showDivider={false}
      />      

      <ImageDivider src={ForestDivider.src} marginTop="6vw"></ImageDivider>

      <BodyHeading marginTop="5vw" marginBottom="2vw" centerAligned={true}>Our Impacts</BodyHeading>

      <Slideshow slides={slides} />

      {/* Extra margin so footer doesn't look weird */}
      <div style={{ marginBottom: '20vw' }}></div>

    </main>
  );
}
