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
import LandingContent from "./components/landingContent"


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
 

    </main>
  )
}