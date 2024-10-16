import myHomeData from "@/components/home/data";
import Link from 'next/link';


export default function HomeLayout({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex flex-row items-center justify-center pl-[300px] w-full">
            <header>
            </header>
            <main>{children}</main>
            
        </div>
    );
}