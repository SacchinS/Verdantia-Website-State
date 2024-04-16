import TopInfo from "./topInfo"

interface myProps{
    job : string
    date : string
    applicants : string
    location : string
}
const TitleBlock: React.FC<myProps> = ({ job, date, applicants, location }) => {
    return (
        <div className="flex-col inline-flex ">
            <TopInfo
                job={job}
                date={date}
            />
            <div className="flex-col inline-flex gap-[0.9vh]">
                <p className="text-[0.9vw] text-opacity-70 text-[#53975D]"  style={{fontFamily : "Montserrat"}}>{applicants}</p>
                <p className="text-[1.2vw] text-opacity-70 "  style={{fontFamily : "Bellota Text"}}>Verdantia</p>
                <p className="text-[0.9vw] text-[#A4A4A4]"  style={{fontFamily : "Montserrat"}}>{location}</p>
            </div>

            
        </div>
       
    )

}

export default TitleBlock
