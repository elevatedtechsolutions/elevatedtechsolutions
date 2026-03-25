export function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="motion-safe-aurora absolute left-1/2 top-[-12rem] h-[42rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.13),rgba(37,99,235,0.07)_34%,transparent_70%)] blur-3xl" />
      <div className="motion-safe-aurora-delayed absolute inset-x-0 top-[-20rem] h-[40rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.11),transparent_38%)]" />
      <div className="motion-safe-drift-slow absolute left-[-9rem] top-44 h-[22rem] w-[22rem] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="motion-safe-drift-slower absolute bottom-[-14rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/9 blur-3xl" />
      <div className="absolute left-1/2 top-[24rem] h-[24rem] w-[56rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(50,200,255,0.05),transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-[24rem] grid-fade opacity-[0.16]" />
      <div className="absolute inset-0 opacity-[0.18] micro-grid" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0)_0%,rgba(4,8,20,0.06)_16%,rgba(4,8,20,0.48)_62%,rgba(4,8,20,0.96)_100%)]" />
    </div>
  );
}
