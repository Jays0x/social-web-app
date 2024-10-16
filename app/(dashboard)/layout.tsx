import Sidebar from "@/components/sidebar/Sidebar";
import sideItems from "@/components/sidebar/data";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row font-[family-name:var(--font-geist-sans)]">
      {/* Sidebar */}
      <div className="h-[100vh] z-50 w-[250px] bg-[#0f0f0f] px-[40px] flex flex-col py-[30px] fixed left-0 top-0">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mb-16" />

        <div className="flex flex-col justify-between h-full">
          {/* Sidebar Items */}
          <div className="flex flex-col gap-5">
            {sideItems.map((items) => (
              <Sidebar key={items.id} myItem={items} />
            ))}
          </div>

          {/* Version Information */}
          <div>
            <h1 className="text-[16px] opacity-70">v 2.4.0</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className=" relative w-full">
        {children}
      </main>

      {/* Top Right Notification & Avatar */}
      <div className="w-[350px] flex flex-col gap-3 justify-between items-end pr-5 pt-4">
        <div className="flex flex-row gap-3 fixed top-4 right-5">
          {/* Notification Icon */}
          <div className="bg-[#0f0f0f] w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
            <Image src="/notification.svg" alt="Notification" width={20} height={20} />
          </div>
          {/* Avatar Icon */}
          <div className="bg-[#0f0f0f] w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
            <Image src="/avatar.svg" alt="Avatar" width={20} height={20} />
          </div>
        </div>

        {/* Floating Plus Button */}
        <div className="bg-[#fff] fixed flex justify-center items-center bottom-8 right-8 w-[50px] h-[50px] rounded-full shadow-lg cursor-pointer">
          <Image src="/plus.svg" alt="Create Post" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
