import Image from "next/image";
import bg from "../../assets/wedding-bg.jpg";
import { Portfolio } from "@/components/sections/weddingpage";
import { Prices } from "@/components/sections/weddingpage";
import { BackgroundAudio } from "@/components/ui/BackgroundAudio";

export default function WeddingsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background audio for weddings page only */}
      <BackgroundAudio src="/weddings%20page%20audio/bgmusic.mp3" volume={0.1} playbackRate={0.9} />
      {/* Background image, covers all, adjustable opacity, always behind content */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <Image
          src={bg}
          alt="Wedding floral background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
          priority
          sizes="100vw"
        />
      </div>
      {/* Content above background */}
      <div className="relative z-10 pt-20 w-full max-w-7xl mx-auto">
        <Portfolio />
        <Prices />
      </div>
    </div>
  );
}
