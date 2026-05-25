export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* Stage lights */}
      <div
        className="stage-light"
        style={{
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55), transparent 60%)",
        }}
      />
      <div
        className="stage-light"
        style={{
          top: "20%",
          right: "-15%",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.45), transparent 60%)",
        }}
      />
      <div
        className="stage-light"
        style={{
          bottom: "-20%",
          left: "20%",
          background:
            "radial-gradient(circle, rgba(214,181,109,0.25), transparent 60%)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(5,5,5,0.6)_60%,_#050505_100%)]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-noise" style={{ backgroundSize: "3px 3px" }} />
    </div>
  );
}
