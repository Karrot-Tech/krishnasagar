import Link from 'next/link';
import Image from 'next/image';
import UtilityMenu from '@/components/layout/UtilityMenu';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-[120] flex items-center justify-center px-4 shadow-sm lg:fixed lg:top-4 lg:right-4 lg:left-auto lg:w-auto lg:h-auto lg:bg-transparent lg:border-none lg:shadow-none lg:justify-end lg:px-0 pointer-events-none">
            <div className="max-w-7xl w-full flex items-center justify-between lg:justify-end pointer-events-auto">
                <Link href="/" className="flex items-center gap-3 lg:hidden min-w-0 flex-shrink">
                    <Image
                        src="/saileela-logo.png"
                        alt="Saileela Rahasya"
                        width={40}
                        height={40}
                        className="h-10 w-auto object-contain flex-none"
                    />
                    <span className="text-lg font-bold text-ochre tracking-wide whitespace-nowrap truncate">Saileela Rahasya</span>
                </Link>

                <UtilityMenu />
            </div>
        </header>
    );
}
