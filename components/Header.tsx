"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <header className="site-header">
    <div className="shell nav-row">
      <a className="wordmark focus-ring" href="#top" aria-label="동행컴퍼니 홈"><span>동행</span><small>COMPANY</small></a>
      <nav className="desktop-nav" aria-label="주요 메뉴">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a className="button small" href={site.consultationHref}>상담하기</a></nav>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}>{open ? "닫기" : "메뉴"}</button>
    </div>
    {open ? <nav id="mobile-menu" className="mobile-menu" aria-label="모바일 메뉴">{nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a href={site.consultationHref} onClick={() => setOpen(false)}>상담하기</a></nav> : null}
  </header>;
}
