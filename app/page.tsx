"use client";

export default function Home() {
  const lines = [
    "Your data, displayed for you, and your team."
  ];

  return (
    <main
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-white font-sans selection:bg-purple-500/30 overflow-hidden relative"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Smooth Top Fade / Navbar area */}
      <div
        className="absolute top-0 left-0 right-0 h-96 z-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0.8) 10%, rgba(5, 5, 5, 0.4) 25%, rgba(5, 5, 5, 0) 100%)"
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 transition-all">
        <div className="text-xl font-bold tracking-tighter hover:opacity-80 cursor-pointer transition-opacity">
          INFERENCE
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <button className="btn-glossy px-5 py-2 rounded-[2px] text-xs font-bold text-white tracking-wide">
            Get Started
          </button>
        </div>
      </nav>

      <section className="flex-1 relative flex flex-col justify-center items-center px-8 md:px-24 text-center overflow-hidden z-20">
        {/* Hero Text Content */}
        <div className="max-w-6xl z-20 flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] text-center">
            {lines.map((line, i) => (
              <div key={i} className="flex flex-wrap justify-center gap-x-[0.25em]">
                {line.split(" ").map((word, j) => (
                  <span key={`${word}-${j}`} className="word-mask py-3">
                    <span
                      className="animate-word inline-block"
                      style={{ animationDelay: `${0.1 + (j * 0.08)}s` }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </h1>

          {/* Signup Input - Pill Shape & Gray Glossy */}
          <div className="mt-12 w-full max-w-[460px] relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000"></div>
            <div className="glossy-pill-gray relative flex items-center p-1.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-6 py-3 text-sm outline-none placeholder:text-zinc-500 font-medium tracking-tight text-white/90"
              />
              <button className="btn-glossy rounded-full px-8 py-3 text-xs font-black text-white/90 tracking-widest uppercase">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
