import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import ImageDivider from './imageDivider';
  import JobApplicationPopUp from './jobApplicationPopUp';
  import JobBlock from './jobBlock';
  import JobDetailBlock from './jobDetailBlock';
  import LandingContent from './landingContent';
  import Slideshow from './slideshow';
  import ValuesLeftTab from './valuesLeftTab';
  import ValuesRightTab from './valuesRightTab';
  import { db } from '@/app/firebase/config';
  import { motion } from 'framer-motion';
  import HandsPlanting from '../../public/images/handsPlanting.svg';
  import PotDivider from '../../public/images/potDivider.png';
  import ForestDivider from '../../public/images/forestDivider.png';
  import Slide1 from '../../../public/images/Slide1.svg';
  import Slide2 from '../../../public/images/Slide2.svg';
  import Slide3 from '../../../public/images/Slide3.svg';
  import Slide4 from '../../../public/images/Slide4.svg';
  import Slide5 from '../../../public/images/Slide5.svg';

  const MobileCarousel = () => {



    return(
        <div>
            <div className="relative text-center pb-[10vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '7vw', lineHeight: '9vw' }}>
                    Our Projects  
            </div>
          
            <Carousel className="w-full max-w-xs">
                <CarouselContent>

                    <CarouselItem className="flex flex-col gap-[15vw]justify-center w-[50vw] h-[50vw] items-center">
                        <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={Slide1.src} />
                    
                    </CarouselItem>

                    <CarouselItem className="justify-center w-[50vw] h-[50vw] items-center">
                        <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={Slide2.src} />
                    </CarouselItem>

                    <CarouselItem className="justify-center w-[50vw] h-[50vw] items-center">
                        <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={Slide3.src} />
                    </CarouselItem>

                    <CarouselItem className="justify-center w-[50vw] h-[50vw] items-center">
                        <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={Slide4.src} />
                    </CarouselItem>
                    <CarouselItem className="justify-center w-[50vw] h-[50vw] items-center">
                        {/* <div className='w-[60vw] h-[60vw] overflow-hidden '>

                            <img className="z-10 rounded-[8vw] w-full h-full object-cover object-center " src={Slide5.src} />

                        </div> */}
                        <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={Slide5.src} />

                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )

  }

  export default MobileCarousel