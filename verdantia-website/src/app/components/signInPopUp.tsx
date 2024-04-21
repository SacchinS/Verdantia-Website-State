'use client'

//components/signInPopUp.tsx

import {useState} from 'react'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'

import signInImage from "./signInImage.png"

import {useRouter} from "next/navigation";

const SignInPopUp: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const handleSignIn = async () => {
        try {
            // @ts-ignore
            const res = await signInWithEmailAndPassword(email, password)
            console.log(res)
            setEmail('')
            setPassword('')
            router.push('/portal')
        } catch (error) {
            console.error(error)
        }
    }

    const redirectToSignUp = () => {
        router.push('/signUp')
    }

    // @ts-ignore
    return (
        <div className="flex  items-center relative bg-white w-1/2 h-full justify-self-center">
            <div className="overflow-hidden rounded-[1vw] flex items-center flex-1 grow relative border border-solid border-[#b2b2b2] shadow-[0px_4px_4px_#00000040]">
                <div className="flex flex-col items-center justify-center px-24 py-24 relative flex-1 grow gap-[15px]">
                    <div className="inline-flex flex-col items-center gap-[5px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Bellota_Text',Helvetica] font-bold text-[#3e3e3e] text-[40px] tracking-[0] leading-[46.0px] whitespace-nowrap">
                            Welcome Back
                        </div>
                        <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
                            <p className="relative w-fit mt-[-1.00px] [font-family:'Bellota_Text',Helvetica] font-bold text-neutral-500 text-[18px] tracking-[0] leading-[20.7px] whitespace-nowrap">Please enter your details to sign in.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start justify-center gap-[15px] w-full flex-[0_0_auto] relative self-stretch">
                            <div  className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <input type={"email"} placeholder={"email"} value={email} onChange={(e) => setEmail(e.target.value)} className="w-fit h-[72px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] rounded-[7px] border-2 border-solid border-[#9c9c9c] relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e3e3e] text-[24px] tracking-[0] leading-[27.6px] whitespace-nowrap"></input>
                            </div>
                            <div  className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <input type={"password"} placeholder={"password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-fit h-[72px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] rounded-[7px] border-2 border-solid border-[#9c9c9c] relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#3e3e3e] text-[24px] tracking-[0] leading-[27.6px] whitespace-nowrap"></input>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] w-fit flex-[0_0_auto] relative self-stretch">
                            <button onClick={handleSignIn} className="flex items-center justify-center gap-[10px] px-[167px] py-[20px] w-fit flex-[0_0_auto] bg-[#53975d] rounded-[7px] overflow-hidden relative self-stretch">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[27.6px] whitespace-nowrap">
                                    Sign In
                                </div>
                            </button>
                            <p className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[16px] tracking-[0] leading-[18.4px] whitespace-nowrap">
                                <span className="text-neutral-500">Don’t have an account?</span>
                                <span className="text-black">&nbsp;</span>
                                <span>
                                    <button onClick = {redirectToSignUp} className="text-[#3e3e3e] underline">Create account</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <img className="relative w-1/2" alt="signInImage" src={signInImage.src} />

            </div>
        </div>
    );
};


export default SignInPopUp;