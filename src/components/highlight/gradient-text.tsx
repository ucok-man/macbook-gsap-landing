import { type ReactNode } from "react";
import { cn } from "../../utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GradientText({ children, className }: Props) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#0096ff] via-[#bb64ff] to-[#eb7500] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
        className
      )}
    >
      {children}
    </span>
  );
}
