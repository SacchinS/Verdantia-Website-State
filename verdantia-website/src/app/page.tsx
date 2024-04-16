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
import HandsPlanting from "../../public/images/handsPlanting.svg"; // Import the image


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
 


      <BodyHeading marginTop="8vw">Featured Jobs</BodyHeading>

      <div className="container mx-auto py-5 px-6 text-white relative z-10 overflow-x-auto flex gap-[5vw]">
        {/* Adjust the width of the job blocks and the gap between them as needed */}
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
        <img src={HandsPlanting.src} alt="Hands Planting" className="w-[40vw] h-auto" /> {/* Image component */}
      </div>

      {/* Add some margin or padding to the bottom of the content */}
      <div style={{ marginBottom: '20vw' }}></div>

    </main>
  );
}
