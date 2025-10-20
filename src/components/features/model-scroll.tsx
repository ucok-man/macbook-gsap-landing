import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { Suspense, useRef } from "react";
import type { Group } from "three";
import { MacbookSize } from "../../constants";
import { useIsDesktop } from "../../hooks/use-is-desktop";
import MacbookModel from "./macbook-model";

export default function ModelScroll() {
  const groupRef = useRef<Group>(null);
  const isDesktop = useIsDesktop();

  useGSAP(() => {
    // 3D MODEL ROTATION
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // Sync Features content
    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3D Spin
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    // Sync content
    contentTimeline
      .to(".box1", { opacity: 1, y: 0, delay: 1 })
      .to(".box2", { opacity: 1, y: 0 })
      .to(".box3", { opacity: 1, y: 0 })
      .to(".box4", { opacity: 1, y: 0 })
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html className="text-white text-3xl uppercase flex items-center justify-center w-full">
            Loading...
          </Html>
        }
      >
        <MacbookModel
          scale={isDesktop ? MacbookSize[16] + 0.015 : MacbookSize[14]}
          position={[0, -1, 0]}
        />
      </Suspense>
    </group>
  );
}
