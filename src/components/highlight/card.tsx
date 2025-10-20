import type { ReactNode } from "react";
import { cn } from "../../utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: Props) {
  return (
    <div className={cn("bg-[#1D1D1F] rounded-3xl", className)}>{children}</div>
  );
}
