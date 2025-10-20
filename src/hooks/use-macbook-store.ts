import { create } from "zustand";
import { MacbookColor, MacbookSize, VIDEO_TEXTURES } from "../constants";

type Color = (typeof MacbookColor)[keyof typeof MacbookColor];
type Scale = (typeof MacbookSize)[keyof typeof MacbookSize];
type Texture = (typeof VIDEO_TEXTURES)[number]["videoPath"];

type State = {
  color: Color;
  scale: Scale;
  texture: Texture;
};

type Action = {
  setColor: (color: Color) => void;
  setScale: (scale: Scale) => void;
  setTexture: (texture: Texture) => void;
  reset: () => void;
};

export const useMacbookStore = create<State & Action>((set, _get, store) => ({
  color: MacbookColor.BLACK,
  setColor: (color: Color) => set({ color }),

  scale: MacbookSize[14],
  setScale: (scale: Scale) => set({ scale }),

  texture: VIDEO_TEXTURES[2].videoPath,
  setTexture: (texture: Texture) => set({ texture }),

  reset: () => set(store.getInitialState()),
}));
