export default function CTA() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
          Ready to transform your development workflow?
        </h2>
        
        <p className="text-lg text-accent mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of teams that are shipping faster and more efficiently with our platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-primary-dark transition text-lg">
            Start free trial
          </button>
          <button className="px-8 py-4 border border-border text-white font-semibold rounded-full hover:border-accent hover:bg-border/50 transition text-lg">
            Schedule a demo
          </button>
        </div>

        <p className="text-accent text-sm mt-8">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  );
}
