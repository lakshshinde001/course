"use client"; 
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import TabsDemo from "./Content";

export default function Content() {
  return (
    <div className="min-h-screen relative w-full bg-slate-900 flex flex-col items-center justify-center rounded-lg px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <div className={cn("text-white relative z-20 w-full max-w-4xl flex flex-col items-center")}>
        <TabsDemo />
      </div>
      
    </div>
  );
}
