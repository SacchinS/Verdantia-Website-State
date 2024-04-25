import React, { useState, ChangeEvent } from "react";

interface myProps {
    job: string;
    onClose: () => void;
    onSubmit: (formData: JobApplicationFormData) => void;
}

// Define an interface for the form data
interface JobApplicationFormData {
    userId: string; // New property to store the user ID
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    zipCode: string;
}

const JobApplicationPopUp: React.FC<myProps> = ({ job, onClose, onSubmit }) => {
    // State for form data
    const [formData, setFormData] = useState<JobApplicationFormData>({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
    });

    // Handler for input field change
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = () => {
        // Call the onSubmit prop function and pass the form data
        onSubmit(formData);

        // Optionally, you can close the popup after submission
        onClose();
    };

    return (
        <main>
            <div className={"inline-flex flex-col items-start gap-[1vw] p-[2vw] relative bg-white w-fit border border-solid border-[#b2b2b2] shadow-[0px_4px_4px_#00000040] rounded-[1vw]"}>
                <div className="inline-flex flex-col items-start relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Bellota_Text',Helvetica] text-black text-[2.5vw] tracking-[0] leading-[normal]">
                        Job Application
                    </div>
                    <div className="relative w-fit [font-family:'Bellota_Text',Helvetica] text-[#53975dab] text-[1.5vw] tracking-[0] leading-[normal]">
                        {job}
                    </div>
                </div>
                <div className={"inline-flex flex-col items-start gap-[1vw] relative"}>
                    <div className="flex flex-row items-start justify-center gap-[1vw] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-[1vw] w-full">
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                First Name
                            </div>
                            <input
                                type="firstname"
                                placeholder="Enter"
                                name="firstName" // Add name attribute
                                onChange={handleInputChange} // Add onChange handler
                                className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Email
                            </div>
                            <input
                                type="email"
                                placeholder="Enter"
                                name="email" // Add name attribute
    onChange={handleInputChange} // Add onChange handler
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Zip Code
                            </div>
                            <input
                                type="zipcode"
                                placeholder="Enter"
                                name="zipCode" // Add name attribute
    onChange={handleInputChange} // Add onChange handler
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div></div>
                            <div className="flex items-center justify-between w-full gap-[1vw]">
                                <button
                                    onClick={handleSubmit}
                                    className="mt-[0.75vw] flex items-center justify-center py-[0.7vw] w-1/2 bg-[#53975d] rounded-[0.5vw] overflow-hidden"
                                >
                                    <div className="text-white text-[1vw] leading-27.6">
                                        Submit
                                    </div>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="mt-[0.75vw] flex items-center justify-center py-[0.7vw] w-1/2 bg-[#53975d] rounded-[0.5vw] overflow-hidden"
                                >
                                    <div className="text-white text-[1vw] leading-27.6">
                                        Close
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[1vw] w-full">
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Last Name
                            </div>
                            <input
                                type="lastname"
                                placeholder="Enter"
                                name="lastName" // Add name attribute
    onChange={handleInputChange} // Add onChange handler
                                className="w-full h-fit p-[0.8vw] rounded-[0.5vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Address
                            </div>
                            <input
                                type="address"
                                placeholder="Enter"
                                name="address" // Add name attribute
    onChange={handleInputChange} // Add onChange handler
                                className="rounded-[0.5vw] w-full h-fit p-[0.8vw] border-[0.106vw] border-solid border-gray-400 font-normal text-gray-700 text-[1.1vw] whitespace-nowrap"
                            />
                            <div className={"relative ml-0 w-fit mt-[-1.00px] [font-family:'Bellota_Text-Bold',Helvetica] text-black text-[1vw] tracking-[0] leading-[normal]"}>
                                Upload Resume
                            </div>
                            <input className={"h-full text-[1.2vw]"} type="file"/>
                            <button onClick={handleSubmit}></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default JobApplicationPopUp;
