import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useIsDesktop } from "../../hooks/use-is-desktop";
import Card from "./card";
import GradientCard from "./gradient-card";
import GradientText from "./gradient-text";

export default function Highlight() {
  const isDesktop = useIsDesktop();

  useGSAP(() => {
    gsap.to(["#left-column", "#right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isDesktop ? "top top" : "bottom bottom",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights" className="container mx-auto lg:py-40 max-lg:px-5">
      <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">
        There's never been a better time to upgrade.
      </h2>
      <h3 className="text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10">
        Here's what you get with the new MacBook Pro.
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7]">
        {/* Left Column */}
        <div
          id="left-column"
          className="flex flex-col gap-5 opacity-0 -translate-y-5"
        >
          <Card className="h-full bg-[url(/highlight-bg.png)] bg-cover p-10 lg:pt-20 2xl:pt-32">
            <img src="/laptop.png" alt="Laptop" />
            <p className="font-semibold text-4xl max-w-2xs">
              Fly through demanding tasks up to 9.8x faster.
            </p>
          </Card>

          <Card className="flex items-center gap-7 p-10">
            <img src="/sun.png" alt="Sun" />
            <p className="font-semibold text-2xl 2xl:text-3xl">
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </Card>
        </div>

        {/* Right Column */}
        <div
          id="right-column"
          className="flex flex-col gap-5 opacity-0 -translate-y-5"
        >
          <GradientCard>
            <img src="/ai.png" alt="AI" />
            <p className="font-semibold text-2xl 2xl:text-3xl">
              Built for <br />
              <GradientText>Apple Intelligence.</GradientText>
            </p>
          </GradientCard>

          <Card className="h-full p-10 lg:pt-20 2xl:pt-32">
            <img src="/battery.png" alt="Battery" />
            <p className="font-semibold text-4xl max-w-sm">
              Up to
              <GradientText className="from-[#35a98a] to-[#6dd400]">
                {" "}
                14 more hours{" "}
              </GradientText>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
