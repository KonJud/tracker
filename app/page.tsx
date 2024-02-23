import Image from "next/image";
import { poppins } from "./lib/font";

export default function Home() {
  return (
    <main className="flex h-screen relative items-center justify-center overflow-hidden">
      <p className={`${poppins.className} text-indigo-100 cursor-pointer font-bold text-6xl absolute top-4 left-4`}>
        Tracker
      </p>
    </main>
  );
}
