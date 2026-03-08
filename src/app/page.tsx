export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Profile Image Section */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-40 h-40 rounded-full bg-white p-1 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
            alt="Yin Lijun"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-slate-900">
          Yin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Lijun</span>
        </h1>
        <p className="text-xl font-medium text-blue-600/80 tracking-widest uppercase">
          Technology Director • Hydrogen Strategist
        </p>
      </div>

      <p className="max-w-2xl text-xl text-slate-600 leading-relaxed font-light px-4">
        Driving the future of <span className="font-semibold text-slate-900">Hydrogen Energy Safety</span> and 
        <span className="font-semibold text-slate-900"> AI-driven Standardization</span> in China's special equipment sector.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md px-4">
        <a 
          href="/projects" 
          className="flex-1 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105"
        >
          Explore Projects
        </a>
        <a 
          href="/contact" 
          className="flex-1 px-8 py-4 bg-white text-slate-900 font-bold border-2 border-slate-200 rounded-2xl shadow-sm hover:border-blue-600 transition-all duration-300 hover:scale-105"
        >
          Let's Connect
        </a>
      </div>

      {/* Decorative Banner Image */}
      <div className="w-full max-w-4xl mt-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
          alt="Engineering & Innovation"
          className="w-full h-64 object-cover opacity-90"
        />
      </div>
    </div>
  );
}
