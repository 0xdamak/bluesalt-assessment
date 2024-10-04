import { Logo } from "./Logo";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DashboardIcon from "@/public/svgs/dashboard.svg";
import RequestsIcon from "@/public/svgs/requests.svg";
import KYCIcon from "@/public/svgs/kyc.svg";
import ReportsIcon from "@/public/svgs/reports.svg";
import TasksIcon from "@/public/svgs/tasks.svg";
import AuditTrailIcon from "@/public/svgs/link.svg";
import CustomerIcon from "@/public/svgs/customer.svg";
import UserIcon from "@/public/svgs/user.svg";
import SettingsIcon from "@/public/svgs/gear.svg";
import AdministrationIcon from "@/public/svgs/security-shield.svg";
import Image from "next/image";

export function SideNav(): JSX.Element {
  const pathname = usePathname();
  const links = [
    {
      title: "Dashboard",
      href: "/app",
      icon: <DashboardIcon />,
    },
    {
      title: "Requests",
      href: "/app/requests",
      icon: <RequestsIcon />,
      className: "border-b",
    },
    {
      title: "KYC",
      href: "/app/kyc",
      icon: <KYCIcon />,
    },
    {
      title: "Reports",
      href: "/app/reports",
      icon: <ReportsIcon />,
    },
    {
      title: "Tasks",
      href: "/app/tasks",
      icon: <TasksIcon />,
      className: "border-b",
    },
    {
      title: "Audit Trail",
      href: "/app/audit-trail",
      icon: <AuditTrailIcon />,
    },
    {
      title: "Customers",
      href: "/app/customers",
      icon: <CustomerIcon />,
      className: "border-b",
    },
    {
      title: "Users",
      href: "/app/users",
      icon: <UserIcon />,
    },
    {
      title: "Settings",
      href: "/app/settings",
      icon: <SettingsIcon />,
    },
    {
      title: "Administration",
      href: "/app/administration",
      icon: <AdministrationIcon />,
    },
  ];

  return (
    <aside className="relative h-full w-56 shrink-0 border-r bg-white">
      <div className="px-8 py-6">
        <Logo />
      </div>
      <ul className="font-ibmPlexSans p-6">
        {links.map((link) => (
          <li key={link.href} className={link.className}>
            <Link
              href={link.href}
              className={clsx(
                "my-2 flex items-center gap-4 rounded-md px-3 py-2 transition-all hover:bg-gray-100",
                {
                  "bg-blue-100": pathname === link.href,
                },
              )}
            >
              <span className="flex size-5 items-center justify-center">
                {link.icon}
              </span>
              <span
                className={clsx("text-sm text-[#292D32]", {
                  "font-medium text-[#161716]": pathname === link.href,
                })}
              >
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <Image
          src="https://s3-alpha-sig.figma.com/img/efb4/c5c3/71433b7befe07a6b8161dddcd8d2353c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS4tPC-mMbSjf2XW7iUv1R3vuzoewQEpcv-NAvSA9fgzYfY7zN1riX4aSf5HFar0EXE0-FsDRvuA6IDNKaa-RuhbbPT6eyGGY4v7teBuVdnqXVUvAzsnpngcGtCzguFpxhN3kRRNRZQXqgwp~MDaEso85xqdHJrAl3Ri6q8U~3fAUGPG2thco0xZbCYS2GV8cS4Wznb2PJQ9ADCuJRZ0EqgphWM4m3eEAjG7GSKeYcXfx83d-mSY8qCvXyp7qf94Q-4R9QpH-crJVraKTrgm6rFHy1phVJmRMjqIz5RTTsxhnoz4wG8Vq3lorzekwUe6gSleP1ZEcEAmLrtw8-p4Pg__"
          width={24}
          height={24}
          alt="user"
          className="shrink-0 self-start rounded-full object-cover"
        />
        <h1 className="text-sm text-black">ByeWind</h1>
      </div>
    </aside>
  );
}
