import Blog from "@/components/global/blog";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate";

const words = `Eco-friendly Solutions. Sustainable Future.`;

export default function Home() {
  return (
    <main className="[background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
      <Navbar />
      <div className="absolute inset-0  h-full w-full items-center px-5 py-24 ">
        <div className="flex flex-col items-center text-center">
          <TextGenerateEffect words={words} />
          <Button
            size={"lg"}
            className="group w-80 items-center justify-center gap-4 rounded-full border-t-2 border-b-[1px] border-[#4D4D4D] bg-black p-8 text-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-neutral-500 md:mb-0"
          >
            <span className="group-hover:to-black bg-gradient-to-r from-neutral-500 to-neutral-600 bg-clip-text font-sans text-transparent group-hover:bg-gradient-to-r group-hover:from-black md:text-center">
              Shop
            </span>
          </Button>
        </div>
        <Blog />
      </div>
    </main>
  );
}
