/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { usePathname } from "next/navigation";

export function useGetPageTitle() {
  const pathname = usePathname();

  function getPageTitle() {
    if (pathname === "/app") return "Dashboard";
    if (pathname === "/app/requests") return "Requests";
    if (pathname === "/app/kyc") return "KYC";
    if (pathname === "/app/reports") return "Reports";
    if (pathname === "/app/tasks") return "Tasks";
    if (pathname === "/app/audit-trail") return "Audit Trail";
    if (pathname === "/app/customers") return "Customers";
    if (pathname === "/app/users") return "Users";
    if (pathname === "/app/settings") return "Settings";
    if (pathname === "/app/administration") return "Administration";
    return "";
  }
  return { getPageTitle };
}
