"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Link from "next/link";

export default function Navbar() {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      setCurrentTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "light") {
          setCurrentTheme("light");
          const checkbox = document.querySelector(
            'input[type="checkbox"]'
          ) as HTMLInputElement;
          if (checkbox) {
            checkbox.checked = true;
          }
        }
      }
    });
  }, [currentTheme]);

  const switchTheme: React.MouseEventHandler<HTMLLabelElement> = (event) => {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header>
      <div className="navContainer">
        <Link href="/">
          <div className="animated">
            <h1 className="animatedTitle">simon florysiak</h1>
          </div>
        </Link>
        <nav>
          <Link href="/works">Works</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
          <div className="theme-switch-wrapper">
            <label
              className="theme-switch"
              htmlFor="checkbox"
              onClick={switchTheme}
            >
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}
