import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <div>
            <Link href={href} className={isActive ? 'text-white bg-sky-600 p-2' : 'text-black'}>
                {children}
            </Link>
        </div>
    );
};

export default Navlink;