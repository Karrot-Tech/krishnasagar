'use client';

import { useState, useEffect } from 'react';
import { getAllTickets, replyToTicket, closeTicket } from '@/actions/tickets';
import { MessageCircle, Send, CheckCircle2, User, Clock, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Notification, NotificationType } from '@/components/common/Notification';

type TicketMessage = {
    sender: 'USER' | 'ADMIN';
    text: string;
    createdAt: string;
};

type TicketUser = {
    name: string | null;
    email: string;
    image: string | null;
}

type Ticket = {
    id: string;
    subject: string;
    status: 'OPEN' | 'ANSWERED' | 'CLOSED';
    createdAt: string;
    user: TicketUser;
    messages: TicketMessage[];
};

export default function AdminTicketsPage() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedTicketId, setExpandedTicketId] = useState<string | null>(null);
    const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState<{ [key: string]: boolean }>({});

    // UI Feedback State
    const [notification, setNotification] = useState<{ message: string; type: NotificationType } | null>(null);
    const [confirmCloseId, setConfirmCloseId] = useState<string | null>(null);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        setIsLoading(true);
        const data = await getAllTickets();
        setTickets(data as unknown as Ticket[]);
        setIsLoading(false);
    };

    const handleReply = async (ticketId: string) => {
        const text = replyText[ticketId];
        if (!text?.trim()) return;

        setIsSubmitting(prev => ({ ...prev, [ticketId]: true }));
        const result = await replyToTicket(ticketId, text);

        if (result.success) {
            setReplyText(prev => ({ ...prev, [ticketId]: '' }));
            setNotification({ message: "Guidance sent successfully!", type: 'success' });
            fetchTickets();
        } else {
            setNotification({ message: result.error || "Error sending guidance", type: 'error' });
        }
        setIsSubmitting(prev => ({ ...prev, [ticketId]: false }));
    };

    const handleClose = async (ticketId: string) => {
        setConfirmCloseId(null);
        const result = await closeTicket(ticketId);
        if (result.success) {
            setNotification({ message: "Inquiry closed successfully", type: 'success' });
            fetchTickets();
        } else {
            setNotification({ message: "Error closing inquiry", type: 'error' });
        }
    };

    if (isLoading && tickets.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-ochre" />
                <p className="text-lg">Loading all inquiries...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-4 md:py-8 px-4 space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-4 md:pb-6 gap-4">
                <div>
                    <h1 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">Seeker Inquiries</h1>
                    <p className="text-xs md:text-sm text-gray-500 font-medium">Manage and respond to spiritual guidance requests</p>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    <span className="bg-orange-50 text-ochre px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider border border-ochre/10 whitespace-nowrap">
                        {tickets.filter(t => t.status === 'OPEN').length} New
                    </span>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider border border-blue-100 whitespace-nowrap">
                        {tickets.filter(t => t.status === 'ANSWERED').length} Answered
                    </span>
                </div>
            </div>

            <div className="grid gap-3">
                {tickets.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
                        <MessageCircle className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">No inquiries yet</h3>
                        <p className="text-sm text-gray-400 font-medium">Seeker inquiries will appear here.</p>
                    </div>
                ) : (
                    tickets.map((ticket) => (
                        <div
                            key={ticket.id}
                            onClick={() => setExpandedTicketId(ticket.id)}
                            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-3 cursor-pointer hover:border-ochre/30 transition-all active:scale-[0.98]"
                        >
                            <div className="flex items-start gap-3 min-w-0 flex-1">
                                <div className="w-10 h-10 bg-gray-50 rounded-xl overflow-hidden flex-none border border-gray-100">
                                    {ticket.user.image ? (
                                        <img src={ticket.user.image} alt={ticket.user.name || ''} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <User className="w-5 h-5 text-gray-300" />
                                        </div>
                                    )}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <h3 className="font-bold text-sm text-gray-900 truncate">{ticket.subject}</h3>
                                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest flex-none ${ticket.status === 'OPEN' ? 'bg-orange-100 text-ochre' :
                                                ticket.status === 'ANSWERED' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {ticket.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-tight gap-2">
                                        <span className="truncate">{ticket.user.name || 'Anonymous'}</span>
                                        <span className="opacity-30">•</span>
                                        <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1 flex-none">
                                <div className="bg-gray-50 px-2 py-0.5 rounded-md text-[9px] font-black text-gray-400 border border-gray-100">
                                    {ticket.messages.length} MSG
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Conversation Focused Modal */}
            <Modal
                isOpen={!!expandedTicketId}
                onClose={() => setExpandedTicketId(null)}
                title={tickets.find(t => t.id === expandedTicketId)?.subject || 'Inquiry'}
            >
                <div className="flex flex-col h-[60vh] -mx-6 -mt-4">
                    {/* Thread Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar bg-gray-50/50">
                        {tickets.find(t => t.id === expandedTicketId)?.messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.sender === 'USER' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[90%] rounded-2xl px-3 py-2 shadow-sm ${msg.sender === 'USER'
                                        ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                                        : 'bg-ochre text-white rounded-tr-none shadow-ochre/20'
                                    }`}>
                                    <p className="text-xs font-medium leading-relaxed">{msg.text}</p>
                                    <div className={`text-[8px] mt-1 font-black uppercase tracking-widest ${msg.sender === 'USER' ? 'text-gray-300' : 'text-orange-100/70'
                                        }`}>
                                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer / Reply Area */}
                    {expandedTicketId && tickets.find(t => t.id === expandedTicketId)?.status !== 'CLOSED' && (
                        <div className="p-4 bg-white border-t border-gray-100 space-y-3">
                            <textarea
                                value={replyText[expandedTicketId] || ''}
                                onChange={(e) => setReplyText(prev => ({ ...prev, [expandedTicketId!]: e.target.value }))}
                                placeholder="Type spiritual guidance..."
                                rows={2}
                                className="w-full border-none bg-gray-50 rounded-xl p-3 text-xs font-medium focus:ring-2 focus:ring-ochre/20 outline-none resize-none"
                            />
                            <div className="flex items-center justify-between gap-3">
                                <button
                                    onClick={() => setConfirmCloseId(expandedTicketId)}
                                    className="text-[9px] font-black text-gray-300 uppercase tracking-widest hover:text-red-500 transition-colors py-2"
                                >
                                    Close Inquiry
                                </button>
                                <button
                                    disabled={isSubmitting[expandedTicketId] || !replyText[expandedTicketId]?.trim()}
                                    onClick={() => handleReply(expandedTicketId!)}
                                    className="bg-ochre text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-700 transition-all disabled:opacity-30 shadow-lg shadow-ochre/20 flex items-center"
                                >
                                    {isSubmitting[expandedTicketId] ? (
                                        <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                                    ) : (
                                        <Send className="w-3 h-3 mr-2" />
                                    )}
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </Modal>

            {/* Premium UI Components */}
            <Modal
                isOpen={!!confirmCloseId}
                onClose={() => setConfirmCloseId(null)}
                title="Close Inquiry?"
                actions={
                    <>
                        <button
                            onClick={() => setConfirmCloseId(null)}
                            className="w-full py-3 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => confirmCloseId && handleClose(confirmCloseId)}
                            className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition shadow-lg"
                        >
                            Yes, Close
                        </button>
                    </>
                }
            >
                Are you sure you want to mark this inquiry as closed? This will prevent further replies.
            </Modal>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                    duration={3000}
                />
            )}
        </div>
    );
}
