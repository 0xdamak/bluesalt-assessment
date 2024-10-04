import { clsx } from "clsx";
import { formatToLocaleString } from "@/helpers/formatToLocaleString";
import ArrowFallIcon from "@/public/svgs/arrow-fall.svg";
import ArrowRiseIcon from "@/public/svgs/arrow-rise.svg";

interface Props {
  title: string;
  value: number;
  rate: number;
  className?: string;
}
export function InfoCard({
  title,
  value,
  rate,
  className = "bg-blue-50",
}: Props): JSX.Element {
  return (
    <div
      className={clsx(
        "flex h-20 w-full max-w-80 flex-col justify-evenly rounded-2xl p-4 sm:h-28",
        className,
      )}
    >
      <p className="text-xs">{title}</p>
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <h1 className="text-xl font-semibold sm:text-2xl">
          {formatToLocaleString(value)}
        </h1>
        <span className="flex items-center text-xs">
          {rate < 1 ? "-" : "+"}
          {rate}
          {rate < 1 ? (
            <ArrowFallIcon className="ml-1" />
          ) : (
            <ArrowRiseIcon className="ml-1" />
          )}
        </span>
      </div>
    </div>
  );
}
