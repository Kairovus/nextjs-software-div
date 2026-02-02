'use client';

import Link from "next/link";
import { ArrowLeft, Settings, MoreHorizontal, Image, Smile, Send, Search } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState<number | null>(1);
    const [messageInput, setMessageInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const conversations = [
        {
            id: 1,
            name: "John Developer",
            handle: "@johndev",
            avatar: "👨‍💻",
            lastMessage: "Sounds good! Let's connect tomorrow",
            timestamp: "2m ago",
            unread: true,
            verified: false,
        },
        {
            id: 2,
            name: "Sarah Code",
            handle: "@sarahcode",
            avatar: "👩‍💻",
            lastMessage: "Thanks for the code review!",
            timestamp: "1h ago",
            unread: false,
            verified: true,
        },
        {
            id: 3,
            name: "Tech Weekly",
            handle: "@techweekly",
            avatar: "📱",
            lastMessage: "Would love to feature your project",
            timestamp: "3h ago",
            unread: true,
            verified: true,
        },
        {
            id: 4,
            name: "Code Master",
            handle: "@codemaster",
            avatar: "🧑‍💻",
            lastMessage: "Check out this new library",
            timestamp: "5h ago",
            unread: false,
            verified: false,
        },
        {
            id: 5,
            name: "React Expert",
            handle: "@reactexpert",
            avatar: "⚛️",
            lastMessage: "The new hooks are amazing!",
            timestamp: "1d ago",
            unread: false,
            verified: true,
        },
        {
            id: 6,
            name: "Frontend Dev",
            handle: "@frontenddev",
            avatar: "💻",
            lastMessage: "Can you help with CSS?",
            timestamp: "2d ago",
            unread: false,
            verified: false,
        },
    ];

    const messages = [
        {
            id: 1,
            senderId: 1,
            text: "Hey! How's the Next.js project going?",
            timestamp: "10:30 AM",
            isSent: false,
        },
        {
            id: 2,
            senderId: 0,
            text: "Going great! Just finished implementing the new features",
            timestamp: "10:32 AM",
            isSent: true,
        },
        {
            id: 3,
            senderId: 1,
            text: "That's awesome! Would love to see a demo",
            timestamp: "10:33 AM",
            isSent: false,
        },
        {
            id: 4,
            senderId: 0,
            text: "Sure! Let me set up a meeting for tomorrow",
            timestamp: "10:35 AM",
            isSent: true,
        },
        {
            id: 5,
            senderId: 1,
            text: "Sounds good! Let's connect tomorrow",
            timestamp: "10:36 AM",
            isSent: false,
        },
    ];

    const selectedConversation = conversations.find(c => c.id === selectedChat);

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            // Handle sending message
            setMessageInput("");
        }
    };

    return (
        <div className="h-screen bg-black text-white border-r border-slate-700">
            <div className="flex">
                <main className="flex-1 max-w-2xl">
                    <div className="flex">
                        {/* Conversations List */}
                        <div className="w-xl md:w-96 border-r border-slate-700 flex flex-col h-screen"> {/* Added h-screen */}
                            {/* Header */}
                            <header className="sticky top-0 z-50 bg-black border-b border-slate-700">
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-8">
                                        <Link href="/" className="hover:bg-slate-900 p-2 rounded-full transition-colors md:hidden">
                                            <ArrowLeft size={20} />
                                        </Link>
                                        <h1 className="text-xl font-bold">Messages</h1>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                            <Settings size={20} />
                                        </button>
                                        <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Search */}
                                <div className="p-0 px-4 pb-4">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 mt-3" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Search Direct Messages"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full bg-slate-900 text-white pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        />
                                    </div>
                                </div>
                            </header>

                            {/* Conversations */}
                            <div className="flex-1 overflow-y-auto w-full">
                                {conversations.map((conversation) => (
                                    <div
                                        key={conversation.id}
                                        onClick={() => setSelectedChat(conversation.id)}
                                        className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-slate-700 ${selectedChat === conversation.id
                                            ? "bg-slate-900/60"
                                            : "hover:bg-slate-900/40"
                                            }`}
                                    >
                                        <div className="text-3xl">{conversation.avatar}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-1">
                                                    <span className="font-bold truncate">{conversation.name}</span>
                                                    {conversation.verified && <span className="text-blue-400">✓</span>}
                                                    <span className="text-slate-500 text-sm">{conversation.handle}</span>
                                                </div>
                                                <span className="text-slate-500 text-sm">{conversation.timestamp}</span>
                                            </div>
                                            <p className={`text-sm truncate ${conversation.unread ? "text-white font-medium" : "text-slate-500"
                                                }`}>
                                                {conversation.lastMessage}
                                            </p>
                                        </div>
                                        {conversation.unread && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {selectedChat ? (
                            <div className="hidden md:flex flex-1 flex-col h-screen">
                                {/* Chat Header */}
                                <header className="sticky top-0 z-50 bg-black border-b border-slate-700 p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">{selectedConversation?.avatar}</div>
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <span className="font-bold">{selectedConversation?.name}</span>
                                                    {selectedConversation?.verified && <span className="text-blue-400">✓</span>}
                                                </div>
                                                <span className="text-slate-500 text-sm">{selectedConversation?.handle}</span>
                                            </div>
                                        </div>
                                        <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </div>
                                </header>
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                                        >
                                            <div className="flex items-end gap-2 max-w-md">
                                                {!message.isSent && (
                                                    <div className="text-2xl">{selectedConversation?.avatar}</div>
                                                )}
                                                <div>
                                                    <div
                                                        className={`px-4 py-2 rounded-2xl ${message.isSent
                                                            ? "bg-blue-500 text-white rounded-br-sm"
                                                            : "bg-slate-900 text-white rounded-bl-sm"
                                                            }`}
                                                    >
                                                        <p className="text-sm">{message.text}</p>
                                                    </div>
                                                    <div className={`text-xs text-slate-500 mt-1 ${message.isSent ? "text-right" : "text-left"}`}>
                                                        {message.timestamp}
                                                    </div>
                                                </div>
                                                {message.isSent && (
                                                    <div className="text-2xl">👩‍💻</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="border-t border-slate-700 p-4">
                                    <div className="flex items-center gap-2">
                                        <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                            <Image size={20} className="text-blue-400" />
                                        </button>
                                        <button className="hover:bg-slate-900 p-2 rounded-full transition-colors">
                                            <Smile size={20} className="text-blue-400" />
                                        </button>
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                placeholder="Start a new message"
                                                value={messageInput}
                                                onChange={(e) => setMessageInput(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                className="w-full bg-slate-900 text-white px-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!messageInput.trim()}
                                            className={`p-2.5 rounded-full transition-colors ${messageInput.trim()
                                                ? "bg-blue-500 hover:bg-blue-600"
                                                : "bg-slate-800 cursor-not-allowed"
                                                }`}
                                        >
                                            <Send size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden md:flex flex-1 items-center justify-center bg-black">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold mb-2">Select a message</h2>
                                    <p className="text-slate-500">Choose from your existing conversations or start a new one</p>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}