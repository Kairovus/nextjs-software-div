export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-border bg-black/80 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-lg">S</span>
          </div>
          <span className="text-lg font-semibold">Software Division</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-accent hover:text-foreground transition">Showcase</a>
          <a href="#" className="text-sm text-accent hover:text-foreground transition">Services</a>
          <a href="#" className="text-sm text-accent hover:text-foreground transition">Enterprise</a>
          <a href="#" className="text-sm text-accent hover:text-foreground transition">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-block px-6 py-2 text-sm font-medium border border-border rounded-full hover:bg-border transition">
            Log in
          </button>
          <button className="px-6 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-primary-dark transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
