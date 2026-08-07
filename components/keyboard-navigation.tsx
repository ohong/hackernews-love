"use client";

import { useEffect, useRef, useState } from "react";

const SECTION_SELECTOR = "[data-section]";
const TYPING_CONTROL_SELECTOR = "input, textarea, select";
const navigationDeltaByKey: Record<string, -1 | 1> = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};

function isTypingControl(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  if (target.closest(TYPING_CONTROL_SELECTOR)) return true;

  const editable = target.closest<HTMLElement>("[contenteditable]");
  return editable?.isContentEditable ?? false;
}

function getSectionLabel(section: HTMLElement, index: number) {
  const heading = section.querySelector("h1, h2")?.textContent?.replace(/\s+/g, " ").trim();
  return heading || (index === 0 ? "Home" : `Entry ${index}`);
}

export function KeyboardNavigation() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const currentIndexRef = useRef(0);
  const keyboardTargetRef = useRef<number | null>(null);
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keyboardSyncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduleKeyboardSyncRef = useRef<(() => void) | null>(null);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!(container instanceof HTMLElement)) return;

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>(SECTION_SELECTOR)
    );
    sectionsRef.current = sections;

    const syncIndexToScrollPosition = () => {
      if (sections.length === 0) return;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - container.scrollTop);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      currentIndexRef.current = nearestIndex;
    };

    const scheduleScrollSync = () => {
      if (syncTimerRef.current !== null) {
        clearTimeout(syncTimerRef.current);
      }

      syncTimerRef.current = setTimeout(() => {
        syncIndexToScrollPosition();
        syncTimerRef.current = null;
      }, 150);
    };

    const finishKeyboardNavigation = () => {
      if (keyboardSyncTimerRef.current !== null) {
        clearTimeout(keyboardSyncTimerRef.current);
        keyboardSyncTimerRef.current = null;
      }
      keyboardTargetRef.current = null;
      syncIndexToScrollPosition();
    };

    const scheduleKeyboardSync = () => {
      if (keyboardSyncTimerRef.current !== null) {
        clearTimeout(keyboardSyncTimerRef.current);
      }
      keyboardSyncTimerRef.current = setTimeout(
        finishKeyboardNavigation,
        900
      );
    };
    scheduleKeyboardSyncRef.current = scheduleKeyboardSync;

    const handleScroll = () => {
      if (keyboardTargetRef.current !== null) return;
      scheduleScrollSync();
    };
    const handleUserScrollStart = () => {
      finishKeyboardNavigation();
      scheduleScrollSync();
    };
    const handleScrollEnd = () => {
      if (keyboardTargetRef.current !== null) {
        finishKeyboardNavigation();
      } else {
        scheduleScrollSync();
      }
    };

    syncIndexToScrollPosition();
    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("scrollend", handleScrollEnd);
    document.addEventListener("pointerdown", handleUserScrollStart, {
      passive: true,
    });
    document.addEventListener("touchstart", handleUserScrollStart, {
      passive: true,
    });
    container.addEventListener("wheel", handleUserScrollStart, {
      passive: true,
    });

    return () => {
      if (syncTimerRef.current !== null) {
        clearTimeout(syncTimerRef.current);
        syncTimerRef.current = null;
      }
      if (keyboardSyncTimerRef.current !== null) {
        clearTimeout(keyboardSyncTimerRef.current);
        keyboardSyncTimerRef.current = null;
      }
      scheduleKeyboardSyncRef.current = null;
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", handleScrollEnd);
      document.removeEventListener("pointerdown", handleUserScrollStart);
      document.removeEventListener("touchstart", handleUserScrollStart);
      container.removeEventListener("wheel", handleUserScrollStart);
      sectionsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const delta = navigationDeltaByKey[event.key];
      if (
        delta === undefined ||
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isTypingControl(event.target)
      ) {
        return;
      }

      const container = document.getElementById("scroll-container");
      const sections = sectionsRef.current;
      if (!(container instanceof HTMLElement) || sections.length === 0) return;

      const currentIndex =
        keyboardTargetRef.current ?? currentIndexRef.current;
      const nextIndex = currentIndex + delta;

      // Leave the browser's native behavior available at either edge.
      if (nextIndex < 0 || nextIndex >= sections.length) return;

      const nextSection = sections[nextIndex];
      if (!nextSection) return;

      event.preventDefault();
      keyboardTargetRef.current = nextIndex;
      currentIndexRef.current = nextIndex;
      container.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
      scheduleKeyboardSyncRef.current?.();
      setAnnouncement(`Showing ${getSectionLabel(nextSection, nextIndex)}.`);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {announcement}
    </p>
  );
}
