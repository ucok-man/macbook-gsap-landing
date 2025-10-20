import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import {
  PERFORMANCE_IMAGES,
  PERFORMANCE_IMAGES_POSITION,
} from "../../constants";
import { cn } from "../../utils";

export default function Performance() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const sectionRef = useRef<HTMLTableSectionElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  // Text Animation
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        "#text-content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: "#text-content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },

    { scope: sectionRef, dependencies: [isDesktop] }
  );

  // Image Animation
  useGSAP(
    () => {
      if (!isDesktop || !imagesRef.current) return;

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      PERFORMANCE_IMAGES_POSITION.forEach((item) => {
        if (item.id === "img5") return;

        const selector = `.${item.id}`;
        const vars = {
          left: item.left,
          right: item.right,
          bottom: item.bottom,
        };

        tl.to(selector, vars, 0);
      });
    },

    { scope: imagesRef, dependencies: [isDesktop] }
  );

  return (
    <section
      id="performance"
      className="w-dvw h-full overflow-hidden pt-20 lg:pt-20 flex flex-col items-center relative"
      ref={sectionRef}
    >
      <h2 className="font-semibold text-3xl lg:text-6xl text-white max-w-2xl text-center">
        Next-level graphics performance. Game on.
      </h2>

      <div
        ref={imagesRef}
        className="w-7xl 2xl:w-[100rem] h-[50vh] lg:h-screen relative"
      >
        {PERFORMANCE_IMAGES.map((item, index) => (
          <img
            key={index}
            className={cn(
              item.id,
              "max-w-40 lg:max-w-[27rem] 2xl:max-w-[35rem] object-cover object-center"
            )}
            src={item.src}
            alt={`Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div id="text-content" className="mx-auto max-w-xl mt-24">
        <p className="lg:h3-semibold base-semibold text-center translate-y-10 opacity-0 px-5">
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
}
