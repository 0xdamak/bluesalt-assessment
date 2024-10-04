import { useGetPageTitle } from "@/hooks/useGetPageTitle";
import { useWindowDimension } from "@/hooks/useWindowDimension";
import SunIcon from "@/public/svgs/sun.svg";
import SideBarIcon from "@/public/svgs/sidebar.svg";
import BellIcon from "@/public/svgs/bell.svg";
import ClockIcon from "@/public/svgs/clock-counter-clockwise.svg";
import SearchIcon from "@/public/svgs/search.svg";
import CommandIcon from "@/public/svgs/command.svg";

export function TopNav(): JSX.Element {
  const { getPageTitle } = useGetPageTitle();
  const { width = 0 } = useWindowDimension();
  return (
    <nav className="flex h-20 w-full items-center justify-between gap-2 border-b border-[#F0ECEC] p-4 sm:h-20 sm:gap-4 sm:p-8">
      <h2 className="font-ibmPlexSans text-[22px] font-medium text-black">
        {getPageTitle()}
      </h2>
      <div className="flex items-center gap-4">
        {width >= 640 && (
          <fieldset className="relative [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:-translate-y-1/2">
            <SearchIcon className="left-2" />
            <input
              type="text"
              className="h-7 w-full max-w-40 rounded-lg bg-black/5 px-7 py-2 text-black/60"
              placeholder="Search"
            />
            <CommandIcon className="right-2" />
          </fieldset>
        )}
        <div className="flex items-center gap-4 [&>svg]:cursor-pointer">
          <SunIcon />
          <ClockIcon />
          <BellIcon />
          <SideBarIcon />
        </div>
      </div>
    </nav>
  );
}
