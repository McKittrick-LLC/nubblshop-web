import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.nubblshop.com" },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#fdfbf7] text-[#2c3e50]">
      {/* Logo / Brand */}
      <div className="mb-8">
        <Image 
          src="/logo.png" 
          alt="The Fuzzy by NubblShop" 
          width={300} 
          height={300} 
          className="mx-auto rounded-full shadow-sm"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold tracking-tight mb-2 text-[#2c3e50]">
        NubblShop
      </h1>

      <p className="text-xl font-medium mb-6 text-[#4a6b8c] italic">
        Home of The Fuzzy.
      </p>

      <p className="max-w-md text-base text-[#5c7a99] leading-relaxed mb-10">
        A better way to fidget. Designed for adult sensory seekers, BFRB, and ADHD.
      </p>

      <div className="inline-block border-2 border-[#8ba6c1] text-[#4a6b8c] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-12 bg-white">
        Coming Soon to Etsy
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/nubblshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 min-h-6 text-[#5c7a99] hover:text-[#2c3e50] transition-colors font-medium text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          @nubblshop
        </a>
      </div>

      <p className="mt-16 text-xs text-[#8ba6c1]">
        Questions?{" "}
        <a href="mailto:support@nubblshop.com" className="inline-flex items-center min-h-6 hover:text-[#2c3e50] underline">support@nubblshop.com</a>
        {" · "}Feedback:{" "}
        <a href="mailto:feedback@nubblshop.com" className="inline-flex items-center min-h-6 hover:text-[#2c3e50] underline">feedback@nubblshop.com</a>
      </p>
      <div className="mt-1 flex items-center gap-2 text-xs text-[#8ba6c1]">
        <a href="/privacy" className="inline-flex items-center min-h-6 hover:text-[#2c3e50] underline">Privacy</a>
        <span>·</span>
        <a href="/terms" className="inline-flex items-center min-h-6 hover:text-[#2c3e50] underline">Terms</a>
      </div>
      <p className="mt-1 text-xs text-[#8ba6c1]">
        © 2026{" "}
        <a href="https://www.mckittrick.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-6 hover:text-[#2c3e50] underline">McKittrick LLC</a>
      </p>
    </main>
  );
}
