import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useIsDesktop } from "../../hooks/use-is-desktop";

export default function Showcase() {
  const isDekstop = useIsDesktop();

  useGSAP(() => {
    if (isDekstop) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to("#mask img", {
          transform: "scale(1.1)",
        })
        .to("#text-content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isDekstop]);

  return (
    <section id="showcase" className="relative">
      <div className="relative lg:overflow-hidden">
        <video
          src="/videos/game.mp4"
          className="size-full object-cover object-center"
          loop
          muted
          playsInline
          autoPlay
        />
        <div id="mask" className="absolute size-[101%] top-0">
          <img
            src="/mask-logo.svg"
            className="size-full scale-150 lg:scale-100"
          />
        </div>
      </div>

      <div
        id="text-content"
        className="relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0"
      >
        <div className="container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20">
          <div className="lg:max-w-md">
            <h2 className="font-semibold text-3xl lg:text-7xl text-white">
              Rocket Chip
            </h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3 className="font-semibold text-xl lg:text-5xl text-white">
                4x faster
              </h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3 className="font-semibold text-xl lg:text-5xl text-white">
                1.5x faster
              </h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
