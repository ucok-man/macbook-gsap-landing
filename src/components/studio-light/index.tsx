import { Environment, Lightformer } from "@react-three/drei";
import { MacbookColor } from "../../constants";
import { useMacbookStore } from "../../hooks/use-macbook-store";

export default function StudioLight() {
  const { color } = useMacbookStore();
  const isBlack = color === MacbookColor.BLACK;

  return (
    <group name="light">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={isBlack ? 5 : 0.5}
            position={[-5, 5, 0]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={isBlack ? 5 : 0.5}
            position={[5, 5, 0]}
            scale={10}
            rotation-y={Math.PI / 0.2}
          />
        </group>
      </Environment>
      <spotLight
        position={[0, 15, 0]}
        angle={0.15}
        decay={0}
        intensity={isBlack ? 5 : 0.5}
      />
      <spotLight
        position={[0, 0, -15]}
        angle={0.15}
        decay={0}
        intensity={isBlack ? 5 : 1}
      />
      <spotLight
        position={[0, -50, 20]}
        angle={0.15}
        decay={-0.15}
        intensity={isBlack ? 2 : 1}
      />
    </group>
  );
}
