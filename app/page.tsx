export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Privacy Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Is Your Salary Being{" "}
          <span className="text-[#58a6ff]">Sold Online?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Data brokers collect and sell your salary information without your consent.
          We scan their databases and alert you the moment your data surfaces.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["500+", "Data Brokers Monitored"],
            ["24/7", "Continuous Scanning"],
            ["Instant", "Email Alerts"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Scan 500+ data broker databases",
              "Continuous 24/7 monitoring",
              "Instant email alerts on exposure",
              "Salary & compensation data coverage",
              "Monthly privacy report",
              "Opt-out request guidance",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Secure payment via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the salary data scanner work?",
              a: "We query hundreds of known data broker APIs and leaked database indexes using anonymized identifiers derived from the information you provide. When a match is found, you receive an immediate email alert with details on where your data was found.",
            },
            {
              q: "Is my submitted information kept private?",
              a: "Yes. Your salary details are encrypted at rest and never sold or shared. We use them solely to run scans on your behalf. You can delete your data at any time from your account dashboard.",
            },
            {
              q: "What happens if my data is found?",
              a: "You'll receive an email alert with the source and a step-by-step opt-out guide for that specific data broker. We track your opt-out requests and re-scan to confirm removal.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Salary Data Leak Scanner. All rights reserved.
      </footer>
    </main>
  );
}
