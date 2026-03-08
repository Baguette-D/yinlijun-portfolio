export default function Projects() {
  const projects = [
    {
      title: "Hydrogen Energy Observer",
      description: "A comprehensive analytical report series focusing on global hydrogen standards and high-pressure vessel safety.",
      tag: "Hydrogen",
      image: "https://images.unsplash.com/photo-1692695241048-245815d24b3d?auto=format&fit=crop&q=80&w=600",
      icon: "💧"
    },
    {
      title: "AI Risk Framework",
      description: "Defining evaluation metrics for artificial intelligence application in safety-critical industrial equipment.",
      tag: "AI & Data",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
      icon: "🤖"
    },
    {
      title: "Next-Gen Policy Pre-Research",
      description: "Strategic foresight and policy recommendations for the '15th Five-Year Plan' in special equipment regulation.",
      tag: "Policy",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600",
      icon: "📈"
    }
  ];

  return (
    <div className="space-y-16 py-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-slate-900">Vision in Action</h1>
        <p className="text-lg text-slate-500">Leading critical projects at the intersection of energy security and technological evolution.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {projects.map((p, idx) => (
          <div key={idx} className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg">
                <span className="text-2xl">{p.icon}</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-lg">
                {p.tag}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{p.description}</p>
              <div className="pt-4 flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                Learn More <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
