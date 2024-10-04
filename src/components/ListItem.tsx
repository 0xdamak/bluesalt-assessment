import { truncateString } from "@/helpers/truncateString";
import { clsx } from "clsx";
import Image from "next/image";

export function ListItem({
  image,
  icon,
  text,
  subText,
  iconClass = "bg-blue-50",
}: {
  icon?: React.ReactNode;
  image?: string;
  iconClass?: string;
  text: string;
  subText?: string;
}): JSX.Element {
  return (
    <li className="flex gap-2">
      {icon && (
        <div
          className={clsx(
            "flex size-6 shrink-0 items-center justify-center rounded-lg",
            iconClass,
          )}
        >
          {icon}
        </div>
      )}
      {image && (
        <Image
          src={image}
          width={24}
          height={24}
          alt={text}
          className="shrink-0 self-start rounded-full object-cover"
        />
      )}
      <div className="overflow-hidden">
        <h1 className="whitespace-nowrap text-sm text-[#353131]">
          {truncateString(text, 24)}
        </h1>
        {subText && <p className="textblack/40 text-xs">{subText}</p>}
      </div>
    </li>
  );
}
