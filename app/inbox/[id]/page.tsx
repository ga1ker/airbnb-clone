import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { getUserId } from "../../lib/actions";
import { getAccessToken } from "../../lib/actions";
import { UserType } from "../page";
import apiService from "@/app/services/apiService";


export type MessageType = {
    id: string;
    name: string;
    body: string;
    conversaionId: string;
    sent_to: UserType;
    created_by: UserType;
}

const ConversationPage = async ({ params }: {params: {id:string}}) => {
    const userId = await getUserId();
    const token = await getAccessToken();
    
        if (!userId || !token) {
            return (
                <main className="max-w-[1500px] max-auto px-6 py-12">
                    <p>Necesitas registrarte</p>
                </main>
            )
        }

    const conversation = await apiService.get(`/api/chat/${params.id}/`)
        
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail 
                messages={conversation.messages}
                userId={userId}
                token={token}
                conversation={conversation.conversation}
            />
        </main> 
    )
}

export default ConversationPage;