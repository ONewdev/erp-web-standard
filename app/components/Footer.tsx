export default function Footer() {
  return (
    <footer
      className="font-kanit bg-white border-t border-slate-100"
      style={{
        padding: "24px 0",
        marginTop: "auto",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-slate-500 text-sm">
          <span className="font-semibold text-slate-700">Copyright © 2014–{new Date().getFullYear()}</span>
          <span className="hidden md:inline mx-2">•</span>
          <span className="block md:inline">Business Competitive Intelligence Co., Ltd.</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          <a
            href="/privacypolicy"
            className="text-slate-500 hover:text-[#0e9aef] text-sm font-medium transition-colors"
          >
            Privacy Policy
          </a>

          <a
            href="https://www.facebook.com/q.soft/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0e9aef] hover:border-[#0e9aef] transition-all duration-300"
            aria-label="Facebook"
          >
            <i className="fa fa-facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
