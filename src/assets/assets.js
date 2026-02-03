// assets.js

// Method 1: Using relative imports (most common in modern projects with Vite, Create React App, Next.js, etc.)
import background from "./background_image.png";
import couch from "./couch.jpg";
import homeChair from "./home_chair.jpg";
import lamp from "./lamp.jpg";
import lamp2 from "./lamp2.jpg";
import logo from "./logo.png";
import mediumDiningTable from "./medium_dining_table.jpg";
import officeChair from "./office_chair.png";
import smallDiningTable from "./small_dining_table.jpg";
import stool from "./stool.jpg";
import bunk from "./bunk.png";
import interiorImg1 from "./interior_img1.jpg";
import interiorImg2 from "./interior_img2.jpg";
import interiorImg3 from "./interior_img3.jpg";
import interiorImg4 from "./interior_img4.jpg";
import throwPillow from "./throw-pillow.jpg";

import video from "./company_video.mp4";

//clients review images
import clientImg1 from "./client_img1.png";
import clientImg2 from "./client_img2.png";
import clientImg3 from "./client_img3.png";
import clientImg4 from "./client_img4.png";
import clientImg5 from "./client_img5.png";
import { Globe, Info, Smile, Timer } from "lucide-react";

export const assets = {
  background,
  couch,
  homeChair,
  lamp,
  lamp2,
  logo,
  mediumDiningTable,
  officeChair,
  smallDiningTable,
  stool,
  throwPillow,
  bunk,
  video,
  interiorImg1,
  interiorImg2,
  interiorImg3,
  interiorImg4,
};

export const reviews = [
  {
    client: "Jerome Livine",
    image: clientImg1,
    rating: 4,
    text: "Beautiful dining table. Worth the hype",
    job: "Photographer",
  },
  {
    client: "Marc Dubois",
    image: clientImg2,
    rating: 5,
    text: "This sofa is the truth! Super comfortable, looks expensive, and my whole parlor now feels like a VIP lounge. Delivery was fast too. 100% recommend!",
    job: "Director",
  },
  {
    client: "Josh Schmidt",
    image: clientImg3,
    rating: 5,
    text: "The dining set changed our family dinners completely! Everyone fights for who sits first. Solid wood, beautiful finish, and it wasn't even that expensive. Thank you guys!",
    job: "Creative Lead",
  },
  {
    client: "Lukas Berg",
    image: clientImg4,
    rating: 4,
    text: "Bought the centre table and it’s giving luxury on a budget! Very strong, modern design, and matches everything perfectly. Only small issue was minor scratch on delivery but they sorted it quickly.",
    job: "Interior Designer",
  },
  {
    client: "Sarah Jenkins",
    image: clientImg5,
    rating: 5,
    text: "My bedroom now feels like a 5-star hotel! The bed frame is elegant, sturdy and the quality is top-notch. Sleeping has never been this sweet. Worth every penny!",
    job: "Freelancer",
  },
];

export const achievements = [
  {
    title: "Countries Worldwide",
    text: "Delivering premium furniture across the globe with excellence and reliability.",
    data: 42,
    icon: Globe,
  },
  {
    title: "Happy Customers",
    text: "Transforming homes and spaces with smiles from thousands of satisfied clients.",
    data: 10000,
    icon: Smile,
  },
  {
    title: "Years of Craftsmanship",
    text: "Building timeless furniture pieces with passion, precision, and tradition.",
    data: 12,
    icon: Timer,
  },
  {
    title: "Custom Designs Delivered",
    text: "Turning unique visions into stunning reality, one bespoke piece at a time.",
    data: 3200,
    icon: Info,
  },
];

export const products = [
  {
    id: "1",
    name: "Luxury Office Chair",
    price: 129.99,
    condition: "low-stock",
    discount: 25,
    freeShipping: true,
    image: officeChair,
    rating: { star: 4.7, number: 2158 },
    colors: ["green", "gray", "black", "red"],
  },
  {
    id: "2",
    name: "Modern Dining Set (6 Seater)",
    price: 399.99,
    condition: "popular",
    discount: 25,
    freeShipping: false,
    image: mediumDiningTable,
    rating: { star: 4.9, number: 344 },
    colors: ["#78716c"], // Default color only
  },
  {
    id: "3",
    name: "Cloud Comfort Sofa (3 Seater)",
    price: 549.99,
    condition: "bestseller",
    discount: 15,
    freeShipping: true,
    image: couch,
    rating: { star: 4.8, number: 1876 },
    colors: ["#64748b", "#78716c", "#71717a", "#10b981"],
  },
  {
    id: "4",
    name: "Minimalist Home Accent Chair",
    price: 189.99,
    condition: "new",
    discount: 10,
    freeShipping: true,
    image: homeChair,
    rating: { star: 4.1, number: 932 },
    colors: ["#ffbf00", "indigo", "#737373"],
  },
  {
    id: "5",
    name: "Modern Floor Lamp - Gold Base",
    price: 89.99,
    condition: "new",
    discount: 0,
    freeShipping: false,
    image: lamp,
    rating: { star: 4.5, number: 764 },
    colors: [], // No color options for this model
  },
  {
    id: "6",
    name: "Scandinavian Stool Set (2pcs)",
    price: 119.99,
    condition: "trending",
    discount: 20,
    freeShipping: true,
    image: stool,
    rating: { star: 4.7, number: 521 },
    colors: ["#78716c", "white"],
  },
  {
    id: "7",
    name: "Queen Size Bunk Bed - Space Saver",
    price: 459.99,
    condition: "popular",
    discount: 18,
    freeShipping: true,
    image: bunk,
    rating: { star: 4.8, number: 689 },
    colors: ["gray"], // Default color only
  },
  {
    id: "8",
    name: "Velvet Decorative Throw Pillow (Set of 2)",
    price: 49.99,
    condition: "new",
    discount: 0,
    freeShipping: false,
    image: throwPillow,
    rating: { star: 4.9, number: 1243 },
    colors: ["pink", "#10b981", "#ffbf00", "indigo"],
  },
  {
    id: "9",
    name: "Compact Small Dining Table (4 Seater)",
    price: 249.99,
    condition: "limited",
    discount: 30,
    freeShipping: true,
    image: smallDiningTable,
    rating: { star: 4.6, number: 412 },
    colors: ["#78716c"], // Default color only
  },
  {
    id: "10",
    name: "Modern LED Table Lamp - Dimmable",
    price: 69.99,
    condition: "trending",
    discount: 15,
    freeShipping: false,
    image: lamp2,
    rating: { star: 4.7, number: 958 },
    colors: [], // Single factory finish
  },
];

export const stats = [
  { id: 1, value: "95%", label: "Customer Satisfaction" },
  { id: 2, value: "24/7", label: "Customer Support" },
  { id: 3, value: "1000+", label: "Unique Designs" },
  { id: 4, value: "Cheap", label: "Global shipping" },
];

export const serviceList = [
  { id: "space", title: "Space Planning" },
  { id: "3d", title: "3D Visualization" },
  { id: "furniture", title: "Furniture Selection" },
  { id: "color", title: "Color Consultation" },
  { id: "lighting", title: "Lighting Design" },
  { id: "project", title: "Project Management" },
];

export const workflowSteps = [
  {
    id: "consultation",
    step: "01",
    title: "Consultation",
    description:
      "Understanding your vision and requirements through detailed discussions and site analysis.",
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description:
      "Creating detailed plans and 3D visualizations to bring your ideas to life.",
  },
  {
    id: "selection",
    step: "03",
    title: "Selection",
    description:
      "Choosing the perfect furniture and materials that match your style and budget.",
  },
  {
    id: "installation",
    step: "04",
    title: "Installation",
    description:
      "Professional setup and final styling to complete your dream space transformation.",
  },
];
