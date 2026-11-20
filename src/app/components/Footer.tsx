export default function Footer() {
  return (
    <footer className="border-t border-burnt-orange/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-8">
        <a href="#home" className="font-display text-xl font-bold">
          <span className="gradient-text">Thanh Ngan</span>
          <span className="text-mustard">.</span>
        </a>
        <p className="text-sm text-text-light">
          © 2026 Tran Ngoc Thanh Ngan · Made with 🧡 &amp; a touch of autumn 🍂
        </p>
        <a href="#home" className="text-sm font-medium text-text-medium transition-colors hover:text-burnt-orange">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
