import TopLeftInfo from "./topLeftInfo"
import TopRightInfo from "./topRightInfo"

interface myProps{
    job : string
    date : string
}
const TopInfo: React.FC<myProps> = ({ job, date }) => {
    return (
        <div className="inline-flex flex-row gap-[6vw] w-[39vw] flex items-baseline">
            <TopLeftInfo
                job={job}
                date={date}
            />
            <TopRightInfo/>
        </div>
       
    )

}

export default TopInfo