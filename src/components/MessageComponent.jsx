import { useEffect } from "react";
import useConversation from "../zustand/userConversation";
import Message from "./Message"
import MessageInput from "./MessageInput"
import { TiMessages } from "react-icons/ti";


const MessageComponent = ()=>{
    const {selectedConversation,setSelectedConversation} = useConversation()


    useEffect(()=>{
        //cleanUp function
        return ()=>setSelectedConversation(null);
    },[setSelectedConversation])
    return (
        <div >
           {
            !selectedConversation?<NoChatSelected />:(
                <div className="md:min-w-[450px] w-full h-full ">
                <div className="bg-slate-500 px-4 py-2 mb-2">
                   <span className="labal-text">To:</span>{" "}
                   <span className="text-gray-900 font-bold">{selectedConversation.name}</span>
                </div>
             
               <Message />
               <Message />
               <Message />
               <MessageInput />
               </div>
            )
           }
        </div>
    )
}
export default MessageComponent


const NoChatSelected = ()=>{
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200  font-semibold flex flex-col items-center gap-2">
                <p>Welcome to Chatter</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-xl text-center" />
            </div>
        </div>
    )
}