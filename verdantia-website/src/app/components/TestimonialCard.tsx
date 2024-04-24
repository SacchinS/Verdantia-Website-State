import Shawna from "../../../public/images/shawna.svg"
import Adam from "../../../public/images/Adam.svg"
import Alisa from "../../../public/images/Alisa.svg"

type TestProps = {
    source : string
    name : string
    position : string
    location : string
    quote : string
}

export const TestCard: React.FC<TestProps> = ({source, name, position, location, quote} : TestProps) =>{
    return (

        <div className="flex items-center justify-center">
            <div className="bg-white w-[90vw] sm:w-[60vw]  mt-[10vw] rounded-[3vw] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] px-[2vw] py-[2vh]">
                <div className="flex items-center justify center pt-[3vw] flex-col">
                    {/* make it scalable */}
                    <img src={source} className="rounded-full w-[10vw]"></img>
                    {/* make it scalable */}
                    <h1 className="text-gray-800 font-semibold text-[1.4vw] mt-[2vw]">
                        {name}
                    </h1>
                    {/* make it scalable */}
                    <h1 className="text-gray-500 text-[1.1vw]">
                        {location}
                    </h1>
                    {/* non-scalable */}           
                    <h1 className="text-gray-500 text-[1.1vw] p-4 text-center">
                        {quote}
                    </h1>
                </div>
                {/* non-scalable */}
                <div className="flex justify-between p-4">
                    <div>
                        {/* make it scalable */}
                        <h1 className="text-xs uppercase text-gray-500">
                            Position
                        </h1>
                        {/* make it scalable */}
                        <h1 className="text-xs text-yellow-500">
                            {position}
                        </h1>
                    </div>
                    <div>
                        {/* make it scalable */}
                        <button className="text-xs text-green-300 border-2 py-1  px-2 border-green-300">
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}