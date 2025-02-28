'use client';
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return (
        <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
            <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-300">
                <p className="font-bold text-gray-500">Gadiel</p>
                <p>Ho,a amid</p>
            </div>
            
            <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-300">
                <p className="font-bold text-gray-500">Galker</p>
                <p>Hola gadiel</p>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input type="text" placeholder="Type your message..." className="w-full p-2 bg-gray-200 rounded-xl" name="" id="" />
                <CustomButton 
                    label="jeje"
                    onClick={() => console.log('Clicked')}
                    className="w-[100px]"
                    />
            </div>
        </div>
    )
}

export default ConversationDetail;