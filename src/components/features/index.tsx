import { Canvas } from "@react-three/fiber";
import { FEATURE_ITEMS } from "../../constants";
import { cn } from "../../utils";
import StudioLight from "../studio-light";
import ModelScroll from "./model-scroll";

export default function Features() {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLight />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {FEATURE_ITEMS.map((feature, index) => (
          <div
            key={feature.id}
            className={cn("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
