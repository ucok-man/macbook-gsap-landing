import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { MacbookColor, MacbookSize } from "../../constants";
import { useMacbookStore } from "../../hooks/use-macbook-store";
import { cn } from "../../utils";
import StudioLight from "../studio-light";
import ModelSwitcher from "./model-switcher";

export default function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">
          MacbookPro | Available in 14" & 16" in Silver & Black colors
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor(MacbookColor.SILVER)}
              className={cn(
                "bg-neutral-300",
                color === MacbookColor.SILVER && "active"
              )}
            />
            <div
              onClick={() => setColor(MacbookColor.BLACK)}
              className={cn(
                "bg-neutral-900",
                color === MacbookColor.BLACK && "active"
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(MacbookSize[14])}
              className={cn(
                scale === MacbookSize[14]
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>

            <div
              onClick={() => setScale(MacbookSize[16])}
              className={cn(
                scale === MacbookSize[16]
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLight />
        {/* <Macbook14Model scale={0.06} position={[0, 0, 0]} /> */}

        <ModelSwitcher
          scale={isDesktop ? scale : scale - 0.03}
          isDesktop={isDesktop}
        />
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </section>
  );
}
