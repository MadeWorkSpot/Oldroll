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
      className="mask-fade-x relative flex overflow-hidden border-y border-neutral-100 bg-neutral-50/60 py-5 select-none"
    >
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="px-6 text-sm font-medium tracking-wide whitespace-nowrap text-neutral-500">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
          </span>
        ))}
      </div>
    </div>
  );
}
