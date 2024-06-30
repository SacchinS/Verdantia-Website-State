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
  
  import ImageDivider from '../components/imageDivider';
  import JobApplicationPopUp from '../components/jobApplicationPopUp';
  import JobBlock from '../components/jobBlock';
  import JobDetailBlock from '../components/jobDetailBlock';
  import LandingContent from '../components/landingContent';
  import Slideshow from '../components/slideshow';
  import ValuesLeftTab from '../components/valuesLeftTab';
  import ValuesRightTab from '../components/valuesRightTab';
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

        // <Carousel>
        //     <CarouselContent>
        //     <CarouselItem>
        //         <img src={Slide1.src} className="w-full h-full"/>
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img src={Slide2.src} className="w-full h-full"/>
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img src={Slide3.src} className="w-full h-full"/>
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img src={Slide4.src} className="w-full h-full"/>
        //     </CarouselItem>
        //     <CarouselItem>
        //         <img src={Slide5.src} className="w-full h-full"/>
        //     </CarouselItem>
        //     </CarouselContent>
        //     <CarouselPrevious />
        //     <CarouselNext />
        // </Carousel>
        <div>
        <div className="relative left-[-3vw] pb-[17vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '7vw', lineHeight: '9vw' }}>
                Our Projects  
        </div>
          
        <Carousel className="w-full max-w-xs">
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
                <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        </div>
    )

  }

  export default MobileCarousel