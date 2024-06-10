import { IoSend } from "react-icons/io5";
import useConversation from "../zustand/userConversation";
import { useState } from "react";
import api from "../axiosIndersptor";

const MessageInput = () => {
    const { messages, setMessages, selectedConversation } = useConversation();
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!selectedConversation) {
                setError("No conversation selected.");
                return;
            }

            const response = await api.post(`/messages/send/${selectedConversation._id}`, { message });

            if (response.status === 201) {
                const data = response.data.newMessage;
                setMessages([...messages, data]);
                setMessage('');
            }
        } catch (error) {
            console.error("Error sending message:", error.message);
            setError("Failed to send message. Please try again.");
        }
    };
    // console.log(messages,'hiiiiii')
    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-600 text-white"
                    placeholder="Send message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <IoSend className="text-red-500" />
                </button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
    );
};

export default MessageInput;
