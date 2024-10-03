"use client";

import { useRouter } from "next/navigation";
import Logo from "@/public/svgs/logo.svg";
import RightChevron from "@/public/svgs/right-chevron.svg";
import Link from "next/link";

export default function Home(): JSX.Element {
  const router = useRouter();
  const assessments = [
    {
      title: "Assessment 1",
      href: "/traffic-light",
    },
    {
      title: "Assessment 2",
      href: "",
    },
  ] as const;

  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center gap-2 bg-gradient-to-br from-cyan-300 to-blue-400 p-4">
      <section className="max-h-96 w-full max-w-96 rounded-lg bg-gray-100 px-6 py-8 shadow-sm">
        <Logo className="mx-auto" />
        <div className="mt-8 space-y-4">
          {assessments.map(({ title, href }) => (
            <button
              key={title}
              className="flex h-12 w-full items-center justify-between gap-4 rounded-lg bg-white px-4 py-6 shadow-lg disabled:cursor-not-allowed disabled:bg-white/50"
              disabled={!href}
              onClick={() => {
                if (href) {
                  router.push(href);
                }
              }}
            >
              <h1>{title}</h1>
              <RightChevron className="h-3 w-3" />
            </button>
          ))}
        </div>
      </section>
      <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 font-semibold text-white">
        Developed by{" "}
        <Link target="_blank" href="https://damak.dev/" className="underline">
          Damak
        </Link>
      </h2>
    </main>
  );
}
