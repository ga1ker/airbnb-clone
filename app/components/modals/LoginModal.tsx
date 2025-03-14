'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([])

    const sumbitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData))

        if (response.access) {
                    handleLogin(response.user.pk, response.access, response.refresh)
                    
                    loginModal.close()
        
                    router.push('/')
                } else {
                    setErrors(response.non_field_errors)
                }
    }

    const content = (
        <div>

            <form action={sumbitLogin} className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your email address" type="email" name="" id="" />
                <input onChange={(e) => setPassword(e.target.value)} className="w-full h-[54px] border px-4 border-gray-300 rounded-xl" placeholder="Your password" type="password" name="" id="" />

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
                    onClick={sumbitLogin}/>
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