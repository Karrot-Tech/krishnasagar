
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Footprints,
    Lightbulb,
    Book,
    Ticket
} from 'lucide-react';

const ADMIN_NAV_ITEMS = [
    { label: 'Dash', href: '/admin', icon: LayoutDashboard },
    { label: 'Leela', href: '/admin/leela', icon: Footprints },
    { label: 'Bodha', href: '/admin/bodhakatha', icon: Lightbulb },
    { label: 'Glossary', href: '/admin/glossary', icon: Book },
    { label: 'Inquiry', href: '/admin/tickets', icon: Ticket },
];

export default function AdminBottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-white/10 z-[100] pb-safe lg:hidden">
            <div className="flex justify-around items-center h-16">
                {ADMIN_NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.href === '/admin'
                        ? pathname === '/admin'
                        : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all active:scale-95 ${isActive ? 'text-ochre' : 'text-gray-500'
                                }`}
                        >
                            <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                            <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
