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

            <div className="grid gap-6">
                {tickets.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-900">No tickets yet</h3>
                        <p className="text-gray-500">User inquiries will appear here.</p>
                    </div>
                ) : (
                    tickets.map((ticket) => (
                        <div key={ticket.id} className={`bg-white rounded-xl shadow-sm border transition-all ${expandedTicketId === ticket.id ? 'ring-2 ring-ochre border-transparent' : 'border-gray-200'}`}>
                            {/* Ticket Summary Header */}
                            <div
                                onClick={() => setExpandedTicketId(expandedTicketId === ticket.id ? null : ticket.id)}
                                className="p-4 md:p-6 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                            >
                                <div className="flex items-start space-x-3 md:space-x-4 min-w-0 flex-1">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl overflow-hidden flex-none border border-gray-100 shadow-sm">
                                        {ticket.user.image ? (
                                            <img src={ticket.user.image} alt={ticket.user.name || ''} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <User className="w-5 h-5 text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="font-bold text-sm md:text-lg text-gray-900 truncate max-w-[150px] md:max-w-none">{ticket.subject}</h3>
                                            <span className={`px-2 py-0.5 rounded-md text-[8px] md:text-[10px] font-black uppercase tracking-widest ${ticket.status === 'OPEN' ? 'bg-orange-100 text-ochre' :
                                                ticket.status === 'ANSWERED' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {ticket.status}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center text-[10px] md:text-sm text-gray-500 mt-1 gap-x-2 gap-y-1">
                                            <span className="font-bold text-gray-700 truncate max-w-[100px] md:max-w-none">{ticket.user.name || ticket.user.email}</span>
                                            <span className="hidden xs:inline text-gray-300">•</span>
                                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1 opacity-60" /> {new Date(ticket.createdAt).toLocaleDateString()}</span>
                                            <span className="hidden xs:inline text-gray-300">•</span>
                                            <span className="bg-gray-100 px-1.5 py-0.5 rounded font-medium">{ticket.messages.length} msg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-4 flex-none">
                                    {expandedTicketId === ticket.id ? <ChevronUp className="w-5 h-5 text-gray-300" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {expandedTicketId === ticket.id && (
                                <div className="border-t border-gray-100 bg-gray-50 rounded-b-xl">
                                    {/* Message Thread */}
                                    <div className="p-4 md:p-6 space-y-4 max-h-[400px] overflow-y-auto no-scrollbar">
                                        {ticket.messages.map((msg, idx) => (
                                            <div key={idx} className={`flex ${msg.sender === 'USER' ? 'justify-start' : 'justify-end'}`}>
                                                <div className={`max-w-[90%] md:max-w-[85%] rounded-2xl p-3 md:p-4 shadow-sm ${msg.sender === 'USER'
                                                    ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                                                    : 'bg-ochre text-white rounded-tr-none'
                                                    }`}>
                                                    <p className="text-xs md:text-sm leading-relaxed font-medium">{msg.text}</p>
                                                    <div className={`text-[9px] md:text-[10px] mt-2 font-black uppercase tracking-widest ${msg.sender === 'USER' ? 'text-gray-400' : 'text-orange-100/70'}`}>
                                                        {new Date(msg.createdAt).toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Area */}
                                    {ticket.status !== 'CLOSED' && (
                                        <div className="p-4 md:p-6 border-t border-gray-100 bg-white rounded-b-xl space-y-4">
                                            <div className="relative">
                                                <textarea
                                                    value={replyText[ticket.id] || ''}
                                                    onChange={(e) => setReplyText(prev => ({ ...prev, [ticket.id]: e.target.value }))}
                                                    placeholder="Type your spiritual guidance here..."
                                                    rows={3}
                                                    className="w-full border border-gray-100 rounded-xl p-3 md:p-4 focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none text-sm resize-none bg-gray-50/50"
                                                />
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                                <button
                                                    onClick={() => setConfirmCloseId(ticket.id)}
                                                    className="w-full sm:w-auto text-gray-400 hover:text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center justify-center transition-all px-3 py-2 rounded-lg hover:bg-red-50"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 mr-2" /> Close Inquiry
                                                </button>
                                                <button
                                                    disabled={isSubmitting[ticket.id] || !replyText[ticket.id]?.trim()}
                                                    onClick={() => handleReply(ticket.id)}
                                                    className="w-full sm:w-auto bg-ochre text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-700 transition-all disabled:opacity-50 flex items-center justify-center shadow-lg shadow-ochre/20 active:scale-95"
                                                >
                                                    {isSubmitting[ticket.id] ? (
                                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    ) : (
                                                        <Send className="w-4 h-4 mr-2" />
                                                    )}
                                                    Send Guidance
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

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
