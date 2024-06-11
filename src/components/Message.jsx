import { useEffect } from "react";
import api from "../axiosIndersptor";
import useConversation from "../zustand/userConversation";

const Message = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
 

  useEffect(() => {
    const getMessages = async () => {
      try {
        if (selectedConversation && selectedConversation._id) {
          const response = await api.get(`/messages/send/${selectedConversation._id}`);
          if (response.status === 200) {
            setMessages(response.data.messages || []);
          }
          console.log(response.data.messages);
        }
      } catch (error) {
        console.log(error.message, 'error in get messages');
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);



  if (!Array.isArray(messages) || messages.length === 0) {
    return <div className="h-screen overflow-hidden flex justify-center items-center opacity-25">No messages yet.</div>;
  }
  return (
    <div className="h-screen overflow-auto">
      {Array.isArray(messages) && messages.map((message) => (
        <div key={message._id} className={`chat ${message.senderId === selectedConversation._id ? 'chat-start' : 'chat-end'}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src={message.avatarUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
            </div>
          </div>
          <div className="chat-header">
           
            <time className="text-xs opacity-50">{new Date(message.createdAt).toLocaleTimeString()}</time>
          </div>
          <div className="chat-bubble">{message.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Message;
