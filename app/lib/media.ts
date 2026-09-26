export type MediaItem = {
  id: number;
  type: "image" | "video";
  title: string;
  category: "VR" | "Photo Booth" | "Studio";
  tag: string;
  src: string;
  poster?: string;
  width: number;
  height: number;
  wide?: boolean;
  featured?: boolean;
};

export const media: MediaItem[] = [
  {
    id: 1,
    type: "image",
    title: "Oldroll",
    category: "Studio",
    tag: "Brand",
    src: "/test/brand-banner.jpeg",
    width: 1280,
    height: 476,
    wide: true,
  },
  {
    id: 2,
    type: "video",
    title: "VR Roller Coaster",
    category: "VR",
    tag: "VR Gaming",
    src: "/test/vr-roller-coaster.mp4",
    poster: "/test/vr-roller-coaster-poster.jpg",
    width: 1280,
    height: 720,
    featured: true,
  },
  {
    id: 3,
    type: "image",
    title: "Beyond the Screen",
    category: "VR",
    tag: "VR",
    src: "/test/vr-beyond-reality.jpeg",
    width: 1066,
    height: 1280,
    featured: true,
  },
  {
    id: 4,
    type: "image",
    title: "Little Explorers",
    category: "VR",
    tag: "VR",
    src: "/test/vr-little-explorers.jpeg",
    width: 1254,
    height: 1254,
  },
  {
    id: 5,
    type: "video",
    title: "The Chronicle Spot",
    category: "Photo Booth",
    tag: "In action",
    src: "/test/chronicle-spot-demo.mp4",
    poster: "/test/chronicle-spot-demo-poster.jpg",
    width: 720,
    height: 1280,
  },
  {
    id: 6,
    type: "image",
    title: "Your Moments, Our Magic",
    category: "Photo Booth",
    tag: "Photo Booth",
    src: "/test/photobooth-your-moments.jpeg",
    width: 853,
    height: 1280,
    featured: true,
  },
  {
    id: 7,
    type: "image",
    title: "Moments Worth Keeping",
    category: "Photo Booth",
    tag: "Photo Booth",
    src: "/test/photobooth-moments-worth-keeping.jpeg",
    width: 1254,
    height: 1254,
  },
  {
    id: 8,
    type: "image",
    title: "The Chronicle Spot",
    category: "Photo Booth",
    tag: "Product",
    src: "/test/chronicle-spot.jpeg",
    width: 1254,
    height: 1254,
    featured: true,
  },
  {
    id: 9,
    type: "video",
    title: "Inside the Build",
    category: "Studio",
    tag: "Process",
    src: "/test/dev-walkthrough.mp4",
    poster: "/test/dev-walkthrough-poster.jpg",
    width: 848,
    height: 418,
  },
  {
    id: 10,
    type: "image",
    title: "On Site",
    category: "Photo Booth",
    tag: "Deployment",
    src: "/test/photobooth.jpeg",
    width: 900,
    height: 1600,
    featured: true,
  },
  {
    id: 11,
    type: "video",
    title: "Fridge Magnet",
    category: "Studio",
    tag: "Product",
    src: "/test/fridge-magnet.mp4",
    poster: "/test/fridge-magnet-poster.jpg",
    width: 576,
    height: 1024,
  },
];
