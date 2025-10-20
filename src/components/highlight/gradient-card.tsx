import type { ReactNode } from "react";

export default function GradientCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative p-10 rounded-3xl flex items-center gap-7 bg-[#1D1D1F] border-[3px] border-transparent bg-clip-padding before:content-[''] before:absolute before:inset-0 before:-z-10 before:-m-[5px] before:rounded-3xl before:bg-gradient-to-r before:from-[#0096ff] before:via-[#f2416b] before:to-[#eb7500]">
      {children}
    </div>
  );
}
