import React from "react";
import TitleBlock from "./JDB/titleBlock";
import InfoPanel from "./JDB/infoPanel";
import DetReqBlock from "./JDB/detReqBlock";
import Banner from "../../../public/images/CoordinatorBanner.jpg";

interface myProps {
    workExperience: string;
    workType: string;
    salary: string;
    job: string;
    date: string;
    applicants: string;
    location: string;
    detDesc: string;
    reqDesc: string;
    imgSrc: string;
    onClose: () => void;
}

const JobDetailBlock: React.FC<myProps> = ({ workExperience, workType, salary, job, date, applicants, location, detDesc, reqDesc, imgSrc, onClose }) => {
    return (
        <div className="z-10 bg-white inline-flex flex-col rounded-[1vw] gap-[3vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] px-[3vw] py-[3vh]">
            <img src={Banner.src} alt="Banner" className="w-[40vw] h-auto" />
            <TitleBlock
                job={job}
                date={date}
                applicants={applicants}
                location={location}
            />
            <InfoPanel
                workExperience={workExperience}
                workType={workType}
                salary={salary}
            />
            <DetReqBlock
                detDesc={detDesc}
                reqDesc={reqDesc}
            />
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default JobDetailBlock;
