'use client';

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter();
    const signupModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<string[]>([])
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const submitSignup = async () => {
        const formData = {
            name: 'galker',
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)
            
            signupModal.close()

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors)
        }
    }

    const content = (
        <div>

            <form action={submitSignup} className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your email address" type="email" name="" id="" />
                <input onChange={(e) => setPassword1(e.target.value)} className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your password" type="password" name="" id="" />
                <input onChange={(e) => setPassword2(e.target.value)} className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Repeat password" type="password" name="" id="" />

                {
                    errors.map((error, index) => {
                        return (
                            <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                                {error}
                            </div>
                        )
                    })
                }

                <CustomButton 
                    label="Login"
                    onClick={submitSignup
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