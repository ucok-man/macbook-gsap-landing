import { create } from "zustand";
import { MacbookColor, MacbookSize } from "../constants";

type Color = (typeof MacbookColor)[keyof typeof MacbookColor];
type Scale = (typeof MacbookSize)[keyof typeof MacbookSize];

type State = {
  color: Color;
  scale: Scale;
};

type Action = {
  setColor: (color: Color) => void;
  setScale: (scale: Scale) => void;
  reset: () => void;
};

export const useMacbookStore = create<State & Action>((set, _get, store) => ({
  color: MacbookColor.BLACK,
  setColor: (color: Color) => set({ color }),

  scale: 0.08,
  setScale: (scale: Scale) => set({ scale }),

  reset: () => set(store.getInitialState()),
}));
