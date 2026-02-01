export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent hover:text-foreground transition">Features</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Pricing</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent hover:text-foreground transition">Documentation</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Blog</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent hover:text-foreground transition">About</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Careers</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-accent hover:text-foreground transition">Privacy</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Terms</a></li>
              <li><a href="#" className="text-accent hover:text-foreground transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            <span className="text-sm text-accent">© 2026 Software Division. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-accent hover:text-foreground transition">Twitter</a>
            <a href="#" className="text-accent hover:text-foreground transition">LinkedIn</a>
            <a href="#" className="text-accent hover:text-foreground transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
