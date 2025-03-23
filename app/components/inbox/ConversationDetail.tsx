'use client';

import CustomButton from "../forms/CustomButton";
import { ConversationType, UserType } from "@/app/inbox/page";
import { useEffect, useRef, useState } from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";
import { MessageType } from "@/app/inbox/[id]/page";

interface ConversationDetailProps {
    token: string;
    userId: string;
    conversation: ConversationType;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    userId,
    token,
    conversation,
}) => {
    const messageDiv = useRef(null)
    const [newMessage, setNewMessage] = useState('')
    const myUser = conversation.users?.find((user) => user.id == userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)
    const [realTimeMessages, setRealTimeMessages] = useState<MessageType[]>([])

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true,
    },
)

    useEffect(() => {
        console.log('Connection change', readyState);
    }, [readyState])

    useEffect(() => {
        if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
            const message: MessageType = {
                id: '',
                name: lastJsonMessage.name as string,
                sent_to: otherUser as UserType,
                created_by: myUser as UserType,
                body: lastJsonMessage.body as string,
                conversaionId: conversation.id
            }

            setRealTimeMessages((realTimeMessages) =>[...realTimeMessages, message])
            
        }
        scrollToBottom()
    }, [lastJsonMessage])

    const sendMessage = async () => {
        sendJsonMessage({
            event: 'chat_message',
            data: {
                body: newMessage,
                name: myUser?.name,
                sent_to_id: otherUser?.id,
                conversation_id: conversation.id,
            }
        });

        setNewMessage('')

        setTimeout(() => {
            scrollToBottom()
        }, 50)
    }

    const scrollToBottom = () => {
        if (messageDiv.current) {
            messageDiv.current.scrollTop = messageDiv.current.scrollHeight
        }
    }

    return (
        <div 
            ref={messageDiv}
            className="max-h-[400px] overflow-auto flex flex-col space-y-4">
            {
                realTimeMessages.map((message, index) => {
                    return (
                        <div key={index} className={`w-[80%] ${message.name == myUser?.name ? 'ml-[20%] bg-blue-300' : 'bg-gray-300'} py-4 px-6 rounded-xl`}>
                            <p className="font-bold text-gray-500">{message.name}</p>
                            <p>{message.body}</p>
                        </div>
                    )
                })
            }

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="w-full p-2 bg-gray-200 rounded-xl" 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    />
                <CustomButton 
                    label="jeje"
                    onClick={sendMessage}
                    className="w-[100px]"
                    />
            </div>
        </div>
    )
}

export default ConversationDetail;