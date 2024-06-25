import {SetStateAction, useEffect, useState} from "react";
import {doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "@/app/firebase/config";
import {update} from "@firebase/database";

const PriceFilter: () => void = () => {

    const [minValue, setMinValue] = useState(20);


    const handleMinChange = async (event) => {
        const value = Math.min(Number(event.target.value));
        setMinValue(value);

        const ref = doc(db, "selectedFilters", "selected");
        await updateDoc(ref, {price: minValue})
    };


    return(
        <main>
            <div className='mt-[1.5vw] mb-[1vw]' style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}>Minimum Salary</div>
            <div className="">
                <div className="flex flex-col items-center">

                    <div className="relative w-full max-w-lg">
                        <input
                            type="range"
                            min="0"
                            max="200000"
                            step={"5000"}
                            value={minValue}
                            onChange={handleMinChange}
                            className="absolute w-full pointer-events-all absolute w-full h-10 bg-transparent ${minValue > maxValue - 10 ? 'z-40' : 'z-30'}"

                        />

                    </div>
                    <div className="flex justify-center w-full max-w-lg mt-9"style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}>
                        <p>${minValue/1000}{minValue == 0 ? "" : ",000"}</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default PriceFilter;