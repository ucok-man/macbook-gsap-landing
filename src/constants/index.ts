export const MacbookColor = {
  BLACK: "#2e2c2e",
  SILVER: "#adb5bd",
} as const;

export const MacbookSize = {
  16: 0.07,
  14: 0.06,
} as const;

export const NAVLINKS = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "AirPods" },
];

export const NO_CHANGE_PARTS = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

export const PERFORMANCE_IMAGES = [
  { id: "img1", src: "/performance1.png" },
  { id: "img2", src: "/performance2.png" },
  { id: "img3", src: "/performance3.png" },
  { id: "img4", src: "/performance4.png" },
  { id: "img5", src: "/performance5.jpg" },
  { id: "img6", src: "/performance6.png" },
  { id: "img7", src: "/performance7.png" },
];

export const PERFORMANCE_IMAGES_POSITION = [
  {
    id: "img1",
    left: "5%",
    right: undefined,
    bottom: "65%",
  },
  {
    id: "img2",
    left: undefined,
    right: "10%",
    bottom: "60%",
  },
  {
    id: "img3",
    left: undefined,
    right: "-5%",
    bottom: "45%",
  },
  {
    id: "img4",
    left: undefined,
    right: "-10%",
    bottom: "0%",
  },
  {
    id: "img5",
    right: undefined,
    left: "20%",
    bottom: "50%",
  },
  {
    id: "img6",
    right: undefined,
    left: "2%",
    bottom: "30%",
  },
  {
    id: "img7",
    right: undefined,
    left: "-5%",
    bottom: "0%",
  },
] as const;
