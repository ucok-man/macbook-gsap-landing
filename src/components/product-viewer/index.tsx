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
    <section
      id="product-viewer"
      className="container relative min-h-[93vh] mx-auto px-5 2xl:px-0 mt-40"
    >
      <h2 className="text-white font-semibold text-3xl lg:text-6xl">
        Take a closer look.
      </h2>

      <div className="absolute z-50 bottom-40 lg:bottom-40 2xl:bottom-52 left-1/2 -translate-x-1/2">
        <p className="text-xs text-white bg-black/20 px-2 py-1 rounded-lg">
          MacbookPro | Available in 14" & 16" in Silver & Black colors
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="flex-between bg-neutral-800 rounded-full px-6 py-3 gap-4">
            <div
              onClick={() => setColor(MacbookColor.SILVER)}
              className={cn(
                "bg-neutral-300 size-7 rounded-full cursor-pointer",
                color === MacbookColor.SILVER && "active"
              )}
            />
            <div
              onClick={() => setColor(MacbookColor.BLACK)}
              className={cn(
                "bg-neutral-900 size-7 rounded-full cursor-pointer",
                color === MacbookColor.BLACK && "active"
              )}
            />
          </div>

          <div className="small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2">
            <div
              onClick={() => setScale(MacbookSize[14])}
              className={cn(
                "bg-transparent text-white size-8 rounded-full cursor-pointer flex-center",
                scale === MacbookSize[14] && "bg-white !text-black"
              )}
            >
              <p>14"</p>
            </div>

            <div
              onClick={() => setScale(MacbookSize[16])}
              className={cn(
                "bg-transparent text-white size-8 rounded-full cursor-pointer flex-center",
                scale === MacbookSize[16] && "bg-white !text-black"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        className="!w-full !h-[80vh] lg:!h-dvh relative z-40"
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
