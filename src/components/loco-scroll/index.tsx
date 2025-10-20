import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LocoScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
