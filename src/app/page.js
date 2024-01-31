import Image from "next/image";
import MemeGallery from "./components/memeGallery";

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-black">
      <nav className="text-4xl text-center font-bold mb-8 bg-white rounded-xl ">Reddit Memes Gallery</nav>
      
      <MemeGallery />
    </div>
  );
}
