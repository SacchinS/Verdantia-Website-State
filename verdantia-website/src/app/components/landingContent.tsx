// components/LandingPage.tsx

import Navbar from './navbar';
import JobBlock from './jobBlock';

interface LandingPageProps {
  heading: string;
  subheading: string;
  buttonText?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ heading, subheading, buttonText }) => {
  const [headingPart1, headingPart2] = heading.split('\\n');

  return (
    <div>
      <div className="absolute inset-0 w-screen h-screen bg-center bg-cover" style={{ backgroundImage: `url('/images/background-cropped.png')`, zIndex: -1, height: '85vh'}}></div>
      <Navbar />
      <div className="container mx-auto py-3 px-6 text-white relative z-10 ml-20">
        <div className="text-3xl mb-4" style={{ fontFamily: 'Enriqueta', color: '#3E3E3E', fontSize: '7vw', lineHeight: '8vw' }}>
          {headingPart1 && <div>{headingPart1}</div>}
          {headingPart2 && <div>{headingPart2}</div>}
        </div>
        <div className="text-lg mb-8" style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '2.1vw', lineHeight: '3vw' }}>{subheading}</div>
        {buttonText && (
          <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded hover:bg-gray-800 shadow-lg" style={{ fontFamily: 'Bellota Text', fontSize: '1.4vw', backgroundColor: '#3E3E3E', borderRadius: '25px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.7)' }}>
            {buttonText}
          </button>
        )}
      </div>

      <div className="container mx-auto py-3 px-6 text-white relative z-10 ml-20 overflow-x-auto flex">
        {/* Adjust the width of the job blocks and the gap between them as needed */}

        <JobBlock
          applicantCount="178 Applicants"
          className="!h-[204px] !shadow-[unset] !w-[403px] !mr-[20px]" // Adjust width and margin as needed
          data="3 Days ago"
          frameClassName="!mr-[-9.22px]"
          group="/images/location.png" // Update the image path
          jobTitle="Environmental Scientist"
          layer="/images/remote.png" // Update the image path
          layerClassName="!h-[19px] !mt[[unset] !ml-[unset] !mb-[unset] !w-[17.56px]"
          location="San Francisco, CA"
          workMethod="Remote"
        />
        
        <JobBlock
          applicantCount="178 Applicants"
          className="!h-[204px] !shadow-[unset] !w-[403px] !mr-[20px]" // Adjust width and margin as needed
          data="3 Days ago"
          frameClassName="!mr-[-9.22px]"
          group="/images/location.png" // Update the image path
          jobTitle="Environmental Scientist"
          layer="/images/remote.png" // Update the image path
          layerClassName="!h-[19px] !mt[[unset] !ml-[unset] !mb-[unset] !w-[17.56px]"
          location="San Francisco, CA"
          workMethod="Remote"
        />

        <JobBlock
          applicantCount="178 Applicants"
          className="!h-[204px] !shadow-[unset] !w-[403px] !mr-[20px]" // Adjust width and margin as needed
          data="3 Days ago"
          frameClassName="!mr-[-9.22px]"
          group="/images/location.png" // Update the image path
          jobTitle="Environmental Scientist"
          layer="/images/remote.png" // Update the image path
          layerClassName="!h-[19px] !mt[[unset] !ml-[unset] !mb-[unset] !w-[17.56px]"
          location="San Francisco, CA"
          workMethod="Remote"
        />

      </div>
    </div>
  );
};

export default LandingPage;
