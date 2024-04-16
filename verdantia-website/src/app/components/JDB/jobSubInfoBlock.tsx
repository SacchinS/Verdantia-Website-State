interface myProps {
    title: String
    subtitle?: String
    salary? : string
};

export const JobSubInfoBlock: React.FC<myProps> = ({ title, subtitle, salary }) => {
    return (
        //change all px to relative
        //inline flex means children are arranged to only take up what it needs 
        //block type element (default) means it takes the whole width
        //flex changes position of contents within the div
        //all other things can be by themselves
        //drop shadow is "x offset, y offset, blur size, spread (set to 0), rgba with alpha = opacity"
        <div className="flex flex-1 flex-col bg-white rounded-[1vh] border border-[#b2b2b2] shadow-[0_0.3vh_0.3vh_0_rgba(0,0,0,0.25)]  px-[4.5vh] py-[1.3vh] items-center gap-[0.5vh]">
            <p className="font-montserrat text-[1.25vh] font-medium text-[#737373]">{title}</p>
            {subtitle && <p  className=" text-[1.25vh] font-medium" style={{ fontFamily: 'Montserrat' }}>{subtitle}</p>}
            {salary && 
                <div className="inline-flex flex-row">
                    <p className="text-[1.25vh] font-medium" style={{ fontFamily: 'Montserrat' }}>{salary}</p>
                    <p className="text-[0.75vh] font-medium text-[#b2b2b2]" style={{ fontFamily: 'Montserrat' }}>/year</p>    
                </div>
            }
        </div>
    )
}