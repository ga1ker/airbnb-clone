'use client';
import Image from "next/image";
import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";

const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const addPropertyModal = useAddPropertyModal();

    const content = (
        <>
        {
            currentStep == 1 ? (
                <>
                <h2 className="mb-2 text-2xl">Chose a category</h2>

                <CustomButton 
                    label="Next"
                    onClick={() => setCurrentStep(2)}
                />
                </>
            ) : (
                <>
                <p>step 2</p>
                </>
            )
        }
        </>
    )

    return(
        <>
            <Modal 
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal;