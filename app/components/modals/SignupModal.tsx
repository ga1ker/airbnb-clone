'use client';

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
    const signupModal = useSignupModal();

    const content = (
        <div>

            <form action="" className="space-y-4">
                <input className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your email address" type="email" name="" id="" />
                <input className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your password" type="password" name="" id="" />
                <input className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Repeat password" type="password" name="" id="" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton 
                    label="Login"
                    onClick={() => console.log('login')
                    }/>
            </form>
        </div>
    )
    return(
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
            />
    )
}

export default SignupModal;