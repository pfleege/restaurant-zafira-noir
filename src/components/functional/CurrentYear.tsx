"use client";

// Static site: the year is filled in by the visitor's browser, so it is always current.
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
