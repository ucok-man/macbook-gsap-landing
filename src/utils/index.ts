/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import type { Color, Material, Mesh } from "three";

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export const isMeshWithMaterial = (
  child: any
): child is Mesh & { material: Material & { color: Color } } => {
  return (
    child &&
    "isMesh" in child &&
    child.isMesh &&
    "material" in child &&
    child.material !== undefined
  );
};
