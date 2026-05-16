import { useEffect } from "react";

/**
 * useReveal — observes every `.reveal` element and adds `is-visible`
 * when it enters the viewport. Re-queries after a short delay to
 * catch any elements that rendered after the initial mount (e.g.
 * after a filter change or async load).
 */
export function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });
    };

    // initial pass
    observeAll();

    // catch late-rendered elements (e.g. after filter changes)
    const timeout = setTimeout(observeAll, 600);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}
