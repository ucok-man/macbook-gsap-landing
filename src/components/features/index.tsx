import { Canvas } from "@react-three/fiber";
import { FEATURE_ITEMS } from "../../constants";
import { cn } from "../../utils";
import StudioLight from "../studio-light";
import ModelScroll from "./model-scroll";

export default function Features() {
  return (
    <section id="features" className="pt-40 relative">
      <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">
        See it all in a new light.
      </h2>

      <Canvas
        id="f-canvas"
        className="!w-full !h-dvh relative z-40"
        camera={{}}
      >
        <StudioLight />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {FEATURE_ITEMS.map((feature, index) => (
          <div
            key={feature.id}
            className={cn(
              "max-w-xs absolute z-50",
              `box${index + 1}`,
              feature.styles
            )}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p className="lg:h3-semibold base-semibold">
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
