const disciplines = [
  "Custom Software",
  "Web & Mobile Apps",
  "Photo Booths",
  "VR Gaming",
  "Electronics",
  "Embedded Hardware",
  "Engineering Design",
  "IT Consulting",
];

export default function MarqueeBand() {
  const row = [...disciplines, ...disciplines];

  return (
    <div
      aria-hidden
      className="mask-fade-x relative flex overflow-hidden border-y border-slate-800 bg-slate-900/60 py-5 select-none"
    >
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="px-6 text-sm font-medium tracking-wide whitespace-nowrap text-white">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
