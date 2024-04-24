import DetReqBlock from "./JDB/detReqBlock"
import InfoPanel from "./JDB/infoPanel"
import TitleBlock from "./JDB/titleBlock"
import EnvScientist from "./EnvScientist.png"

/* 
    Big Div (Floating)
        - Image
        - Div
            - Title with Buttons shit
            - Job Sub Info's Row
            - Div:
                - Job Details
                - job Requirements


*/
interface myProps{
    workExperience : string,
    workType : string,
    salary : string 
    job : string
    date : string
    applicants : string
    location : string
    detDesc : string
    reqDesc : string
    imgSrc : string
    onClose: () => void;
}

 const JobDetailBlock: React.FC<myProps> = ({ workExperience, workType, salary, job, date, applicants, location, detDesc, reqDesc, imgSrc, onClose }) => {
    return(
        <div className="bg-white inline-flex flex-col rounded-[1vw] gap-[3vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] px-[3vw] py-[3vh]">
            
            <img src={EnvScientist.src} alt="Hands Planting" className="w-[40vw] h-auto" />
            <TitleBlock
                      job={job}
                      date={date}
                      applicants={applicants}
                      location ={location}
            
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
    )


 }

 export default JobDetailBlock