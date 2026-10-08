"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure" | "span";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  // Whether this element has entered the viewport.
  //
  // Starts false on both the server and the client so hydration matches. The
  // previous version seeded this from `typeof IntersectionObserver`, which made
  // the server render the visible class and the client not, failing hydration
  // for every Reveal on the page.
  //
  // That means the class flip now happens after hydration rather than being
  // baked into the HTML. For content already in view the observer fires
  // immediately on mount, so the entrance still plays without a flash of
  // hidden-then-shown content. With JavaScript off, nothing ever flips the
  // class, so <noscript> in the layout forces these visible.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
