'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <div>

            <form action="" className="space-y-4">
                <input className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your email address" type="email" name="" id="" />
                <input className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your password" type="password" name="" id="" />

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
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
            />
    )
}

export default LoginModal;