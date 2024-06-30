import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
  
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
        <div className="flex justify-center items-center w-full">
            <Carousel className="w-full max-w-xl">
                <CarouselContent>

                    {/* <CarouselItem className="flex flex-col gap-[15vw] justify-center w-[50vw] h-[50vw] items-center"> */}
                    {/* <CarouselItem className="items-center justify-center">
                        <MobileCard slidesrc={Slide1.src}/>                                   
                    </CarouselItem> */}
                    
                    <CarouselItem className="justify-center w-[50vw] h-[100vw] items-center">
                        <div className="border-[0.2vw] rounded-[5vw] h-[100vw] w-[100vw]">
                            <img className="z-10 px-[2.5vw] py-[3vw] rounded-[12vw] w-full h-1/3 overflow-hidden object-cover object-center " src={Slide1.src} />
                            <div className="text-left pt-[5vw] pb-[8vw] px-[6vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '2.5vw', lineHeight: '4.5vw' }}>
                            "30 per cent of emissions from industry and fossil fuels are soaked up by forests and woodlands" - UN Environment Programme
                            Verdantia has successfully planted over 500,000 trees in deforested regions, contributing to the restoration of of habitats for various wildlife species.

                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="justify-center w-[190vw] h-[100vw] items-center">
                        <div className="border-[0.2vw] rounded-[5vw] h-[100vw] w-[100vw]">
                            <img className="z-10 px-[2.5vw] py-[3vw] rounded-[12vw] w-full h-1/3 overflow-hidden object-cover object-center " src={Slide2.src} />
                            <div className="text-left pt-[5vw] pb-[8vw] px-[6vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '2.5vw', lineHeight: '4.5vw' }}>
                            "100 energy companies have been responsible for 71% of all i
                            ndustrial emissions since human-driven climate change was officially recognized." - National Resources
                             Defense Council. Through innovative technologies and sustainable practices, Verdantia has achieved car
                             bon neutrality across its operations, making significant strides in reducing its carbon footprint.            
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="justify-center w-[100vw] h-[100vw] items-center">
                        <div className="border-[0.2vw] rounded-[5vw] h-[100vw] w-[100vw]">
                            <img className="z-10 px-[2.5vw] py-[3vw] rounded-[12vw] w-full h-1/3 overflow-hidden object-cover object-center " src={Slide3.src} />
                            <div className="text-left pt-[5vw] pb-[5vw] px-[6vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '2.5vw', lineHeight: '4.5vw' }}>
                            "Environmental education is a process that allows individuals to explore
                             environmental issues, engage in problem solving, and take action to improve 
                             the environment" - EPA. Verdantia's
                            teams have conducted eco-education programs in local communities, 
                              reaching over 10,000 individuals to inspire environmentally conscious practices.

                            </div>
                        </div>
                    </CarouselItem>
                    
                    <CarouselItem className="justify-center w-[100vw] h-[100vw] items-center">
                        <div className="border-[0.2vw] rounded-[5vw] h-[100vw] w-[100vw]">
                            <img className="z-10 px-[2.5vw] py-[3vw] rounded-[12vw] w-full h-1/3 overflow-hidden object-cover object-center " src={Slide4.src} />
                            <div className="text-left pt-[5vw] pb-[8vw] px-[6vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '2.5vw', lineHeight: '4.5vw' }}>
                            "Digitalisation and smart controls can reduce emissions from buildings by 350 Mt CO2 by 2050" 
                            - International Energy Agency. Verdantia's smart city solutions with progressive municipalities 
                            have lowered energy usage, enhanced waste management efficiency, and elevated urban sustainability.


                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="justify-center w-[50vw] h-[100vw] items-center">
                        <div className="border-[1vw] rounded-[5vw] h-[100vw] w-[100vw]">
                            <img className="z-10 px-[2.5vw] py-[3vw] rounded-[12vw] w-full h-1/3 overflow-hidden object-cover object-center " src={Slide5.src} />
                            <div className="text-left pt-[5vw] pb-[8vw] px-[6vw]" style={{ fontFamily: 'Montserrat', color: '#3e3e3e', fontSize: '2.5vw', lineHeight: '4.5vw' }}>
                            "The World Wide Fund for Nature’s Living Planet Report 2022 documents a 69% average 
                            loss in the abundance of mammal, bird, reptile, fish and amphibian species since 1970" -
                             The London School of Economics and Political Science. Verdantia actively supports
                              biodiversity conservation efforts by protecting endangered species and preserving vital habitats.


                            </div>
                        </div>
                    </CarouselItem>
                

                    {/* <CarouselItem className="justify-center w-[50vw] h-[50vw] items-center">
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
                        {/* <img className="z-10 px-[2.5vw] rounded-[12vw] w-full h-full overflow-hidden object-cover object-center " src={Slide5.src} /> */}

                    {/* </CarouselItem> */} 
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )

  }

  export default MobileCarousel