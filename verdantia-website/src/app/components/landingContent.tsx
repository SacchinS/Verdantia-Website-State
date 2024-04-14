import Navbar from './navbar';

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
      <div className="container mx-auto py-3 px-6 text-white relative z-10 ml-20 mr-20"> {/* Set explicit left and right margins */}
        <div className="text-3xl mb-4" style={{ fontFamily: 'Enriqueta', color: '#3E3E3E', fontSize: '100px', lineHeight: '1.2' }}> {/* Adjusted line height */}
          {headingPart1 && <div>{headingPart1}</div>}
          {headingPart2 && <div>{headingPart2}</div>}
        </div>
        <div className="text-lg mb-8" style={{ fontFamily: 'Bellota Text', color: '#3E3E3E', fontSize: '30px', lineHeight: '2' }}>{subheading}</div>
        {buttonText && (
          <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded hover:bg-gray-800 shadow-lg" style={{ fontFamily: 'Bellota Text', fontSize: 20, backgroundColor: '#3E3E3E', borderRadius: '25px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)' }}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
