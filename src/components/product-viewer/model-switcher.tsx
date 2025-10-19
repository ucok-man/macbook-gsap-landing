import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import type { Group, Object3DEventMap } from "three";
import { MacbookSize } from "../../constants";
import { isMeshWithMaterial } from "../../utils";
import Macbook14Model from "./macbook-14-model";
import Macbook16Model from "./macbook-16-model";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 10;

const fadeMesh = (group: Group<Object3DEventMap> | null, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (isMeshWithMaterial(child)) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveMesh = (group: Group<Object3DEventMap> | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

type Props = {
  scale: number;
  isDesktop: boolean;
};

export default function ModelSwitcher({ scale, isDesktop }: Props) {
  const smallMacbookRef = useRef<Group<Object3DEventMap>>(null);
  const largeMacbookRef = useRef<Group<Object3DEventMap>>(null);
  const showLargeMacbook =
    scale === MacbookSize[16] || scale === MacbookSize[16] - 0.03;

  useGSAP(() => {
    moveMesh(smallMacbookRef.current, showLargeMacbook ? -OFFSET_DISTANCE : 0);
    moveMesh(largeMacbookRef.current, showLargeMacbook ? 0 : OFFSET_DISTANCE);

    fadeMesh(smallMacbookRef.current, showLargeMacbook ? 0 : 1);
    fadeMesh(largeMacbookRef.current, showLargeMacbook ? 1 : 0);
  }, [scale, showLargeMacbook]);

  const controlConfig = {
    snap: true,
    speed: 2,
    zoom: 1,
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlConfig}>
        <group ref={largeMacbookRef}>
          <Macbook16Model
            scale={isDesktop ? MacbookSize[16] : MacbookSize[16] - 0.03}
          />
        </group>
      </PresentationControls>

      <PresentationControls {...controlConfig}>
        <group ref={smallMacbookRef}>
          <Macbook14Model
            scale={isDesktop ? MacbookSize[14] : MacbookSize[14] - 0.03}
          />
        </group>
      </PresentationControls>
    </>
  );
}
