import PropTypes from "prop-types";
import React, { CSSProperties } from "react";
import LocationIcon from "../../../public/images/locationIcon.svg";
import RemoteIcon from "../../../public/images/remoteIcon.svg";

interface Props {
    data: string;
    applicantCount: string;
    workMethod: string;
    location: string;
    jobTitle: string;

    style?: CSSProperties;
}

export const JobBlock = ({
    data = "3 Days ago",
    applicantCount = "178 Applicants",
    workMethod = "Remote",
    location = "San Francisco, CA",
    jobTitle = "Environmental Scientist",
    style,
}: Props): JSX.Element => {
    return (
        <div
            style={style}
            className={'flex flex-col w-[28vw] items-start justify-center gap-[1vw] p-[2vw] relative bg-white rounded-[1vw] border border-solid border-[#b2b2b2] shadow-[0px_4px_4px_#00000040]'}
        >
            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto">
                <div className="relative self-stretch mt-[-1.00vw] [font-family:'Bellota_Text'] font-normal text-[#3e3e3e] text-[2.5vw] tracking-[0] leading-[3vw]">
                    {jobTitle}
                </div>
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[0.25vw] [font-family: 'Montserrat'] font-medium text-neutral-400 text-[1vw] text-center tracking-[0] leading-[normal]">
                        {data}
                    </div>
                    <div className="relative mt-[0.25vw] w-[0.25vw] h-[0.25vw] bg-neutral-400 rounded-[10vw]" />
                    <div className="relative w-fit mt-[0.25vw] [font-family:'Montserrat'] font-medium text-neutral-400 text-[1vw] text-center tracking-[0] leading-[normal]">
                        {applicantCount}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-[5vw] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-[1vw] relative flex-1 grow">
                    <div
                        className={'inline-flex items-center gap-[1vw] relative flex-[0_0_auto] mr-[-3vw] ${frameClassName}'}
                    >
                        <img src={LocationIcon.src} alt="Location Icon" className="w-[1vw] h-[1.5vw]" /> {/* Location Icon */}
                        <div className="relative w-fit [font-family:'Montserrat'] font-normal text-black text-[1vw] text-center tracking-[0] leading-[normal]">
                            {location}
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-[1vw] relative flex-[0_0_auto]">
                        <img src={RemoteIcon.src} alt="Remote Icon" className="w-[1.5vw] h-[1.5vw]" /> {/* Remote Icon */}
                        <div className="relative w-fit [font-family:'Montserrat'] font-normal text-black text-[1vw] text-center tracking-[0] leading-[normal]">
                            {workMethod}
                        </div>
                    </div>
                </div>
                <div className="flex w-[9vw] h-[3vw] items-center justify-center gap-[2vw] p-[1.5vw] relative bg-[#5b8c69] rounded-[2vw] overflow-hidden">
                    <div className="relative w-fit mt-[-1vw] mb-[-1vw] [font-family:'Bellota Text'] font-normal text-white text-[1vw] text-center tracking-[0] leading-[normal]">
                        Details
                    </div>
                </div>
            </div>
        </div>
    );
};

JobBlock.propTypes = {
    data: PropTypes.string,
    applicantCount: PropTypes.string,
    workMethod: PropTypes.string,
    location: PropTypes.string,
    jobTitle: PropTypes.string
}

export default JobBlock;