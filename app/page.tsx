import Image from "next/image";
import { poppins } from "./lib/font";
import Hero from '../public/hero.jpg'

export default function Home() {
  return (
    <main className="flex h-screen relative items-center justify-center overflow-hidden">
      
      <Image
        src={Hero}
        alt='hero image'
        layout="fill"
        quality={100}
        className="absolute inset-0 h-screen w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <p className={`${poppins.className} text-purple-100 cursor-pointer h-auto w-auto font-bold text-6xl absolute top-4 left-4`}>
        Tracker
      </p>

      <div className="relative z-10 w-[600px] text-purple-100 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {"Elevate your order experience"}
        </h1>
        <p className='text-lg mb-6'>
          Track, Trace and Triumph - Your orders, your control. Welcome to the future fo seamless delivery monitoring.
        </p>
        <a 
          className="bg-purple-100 text-xl text-purple-500 px-6 py-2 rounded"
          href="/login">
          Login
        </a>
      </div>
    </main>
  );
}
