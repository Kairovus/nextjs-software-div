export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 border border-border rounded-full text-sm text-accent">
          AI for teams building the web
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          The complete platform to build modern software
        </h1>
        
        <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-12 leading-relaxed">
          Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best applications with modern development tools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-primary-dark transition">
            Get a demo
          </button>
          <button className="px-8 py-3 border border-border text-white font-medium rounded-full hover:border-accent hover:bg-border/50 transition">
            Explore the Product
          </button>
        </div>
      </div>
    </section>
  );
}
