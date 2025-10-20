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

export const FEATURE_ITEMS = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

// LEMOT
export const VIDEO_TEXTURES = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
] as const;
