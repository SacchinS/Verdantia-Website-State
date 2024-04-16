
 
const TopRightInfo: React.FC = ({  }) => {
    return (
        <div className="inline-flex flex-col gap-[1vh] w-[8vw] items-stretch  grid justify-items-center">
            <p className="text-[0.75vw] rounded-[0.8vh] border border-[#b2b2b2] 
                        shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] bg-opacity-70 bg-[#53975D] px-[1.5vw] py-[0.5vh] text-[#FFFFFF] " style={{ fontFamily: 'Montserrat' }}>Apply</p>

            <p className="text-[0.75vw] bg-white rounded-[0.8vh] border border-[#b2b2b2] 
                        shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)] px-[1.5vw] py-[0.5vh]" style={{ fontFamily: 'Montserrat' }}>Add to list</p>
        </div>
       
    )

}

export default TopRightInfo