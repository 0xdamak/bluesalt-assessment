"use client";

import { useWindowDimension } from "@/hooks/useWindowDimension";
import { SideNav } from "@/src/components/SideNav";
import { TopNav } from "@/src/components/TopNav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const { width = 0 } = useWindowDimension();
  return (
    <div className="mx-auto flex h-screen w-screen max-w-[1600px] bg-white">
      {width >= 768 && <SideNav />}
      <div className="flex flex-1 shrink-0 flex-grow flex-col">
        <TopNav />
        <main className="flex w-full flex-1 flex-col overflow-x-auto px-4 py-3 sm:px-8 sm:py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
