"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fallback: If elements remain hidden after 1.5s (observer failed or didn't trigger), reveal them.
    const fallbackTimeout = setTimeout(() => {
      document.querySelectorAll(".reveal-up:not(.revealed)").forEach((el) => {
        el.classList.add("revealed");
      });
    }, 1500);

    // Immediate check for elements above the fold
    const revealVisible = () => {
      document.querySelectorAll(".reveal-up").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("revealed");
        }
      });
    };

    revealVisible();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Lower threshold so it triggers sooner
        rootMargin: "0px 0px 50px 0px", // Trigger slightly before it enters the viewport
      }
    );

    const elements = document.querySelectorAll(".reveal-up");
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically rendered elements or routes
    const mutationObserver = new MutationObserver(() => {
      const currentElements = document.querySelectorAll(".reveal-up:not(.revealed)");
      currentElements.forEach((el) => observer.observe(el));
      revealVisible();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
