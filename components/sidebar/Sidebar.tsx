'use client'
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation';

function Sidebar({ myItem }) {
  const pathname = usePathname();

  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <Link 
        href={myItem.link}
        className={`px-3 py-2 rounded-md flex flex-row w-full items-center gap-3 hover:bg-[#181818] 
        ${pathname === myItem.link ? 'bg-[#181818]' : ''}`}
      >
        {/* Render the icon */}
        <Image src={myItem.icon} className="" alt={myItem.title} width={20} height={20}/>
        
        
        {/* Title */}
        <h1 className="text-[14px] font-normal">{myItem.title}</h1>
      </Link>
    </div>
  );
}

export default Sidebar;
