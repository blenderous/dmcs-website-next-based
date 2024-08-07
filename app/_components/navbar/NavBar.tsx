"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [offset, setOffset] = useState(0);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav role="navigation" className={clsx({ "shrunken-nav": offset > 0 })}>
      {/* desktop nav */}
      <div className="width-container hidden lg:flex lg:items-center lg:justify-between">
        <Link href={"/"} className="logo">
          <Image
            src={
              offset > 0
                ? "/assets/DMCS-logo-white-consice.png"
                : "/assets/DMCS-logo-white.png"
            }
            width={128}
            height={68}
            alt="DMCS Ventures"
          />
        </Link>
        <ul className="nav-links flex items-start">
          <li>
            <a href="#" aria-haspopup="true">
              App Development
            </a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link
                  href={"/application-development/desktop-web-application/"}
                >
                  Desktop Web Application
                </Link>
              </li>
              <li>
                <Link
                  href={"/application-development/progressive-web-application/"}
                >
                  Progressive Web Application (PWA)
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Mobile App</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link href={"/mobile-app/ios-app-development/"}>
                  iOS App Development
                </Link>
              </li>
              <li>
                <Link href={"/mobile-app/android-app-development/"}>
                  Android App Development
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Tool Building</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link href={"/tool-building/web-based-tools/"}>
                  Web-Based Tools
                </Link>
              </li>
              <li>
                <Link href={"/tool-building/ai-based-tools/"}>
                  AI-Based Tools
                </Link>
              </li>
              <li>
                <Link href={"/tool-building/cli-tools/"}>CLI Tools</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Web Building</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link href={"/web-building/website-development/"}>
                  Website Development
                </Link>
              </li>
              <li>
                <Link href={"/web-building/wordpress-theme-development/"}>
                  Wordpress Theme Development
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Design Services</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link href={"/design-services/ux-design/"}>UX Design</Link>
              </li>
              <li>
                <Link href={"/design-services/graphic-design/"}>
                  Graphic Design
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* mobile nav */}
      <div
        className={clsx("width-container nav-container-mobile lg:hidden", {
          "is-open ": mobileMenuVisible,
        })}
      >
        <div className="flex items-center justify-between">
          <Link href={"/"} className="logo">
            <Image
              src="/assets/DMCS-logo-white.png"
              alt="DMCS Ventures"
              width={128}
              height={68}
            />
          </Link>
          <button
            role="button"
            className={clsx("menu menu-1", { "open ": mobileMenuVisible })}
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          >
            <span className="menu-item"></span>
            <span className="menu-item"></span>
            <span className="menu-item"></span>
          </button>
        </div>
        <ul
          className={clsx("nav-links-mobile flex flex-wrap items-start", {
            "hidden ": !mobileMenuVisible,
          })}
        >
          <li>
            <a href="#" aria-haspopup="true">
              App Development
            </a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/application-development/desktop-web-application/"}
                >
                  Desktop Web Application
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/application-development/progressive-web-application/"}
                >
                  Progressive Web Application (PWA)
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Mobile App</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/mobile-app/ios-app-development/"}
                >
                  iOS App Development
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/mobile-app/android-app-development/"}
                >
                  Android App Development
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Tool Building</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/tool-building/web-based-tools/"}
                >
                  Web-Based Tools
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/tool-building/ai-based-tools/"}
                >
                  AI-Based Tools
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/tool-building/cli-tools/"}
                >
                  CLI Tools
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Web Building</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/web-building/website-development/"}
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/web-building/wordpress-theme-development/"}
                >
                  Wordpress Theme Development
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Design Services</a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/design-services/ux-design/"}
                >
                  UX Design
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setMobileMenuVisible(false)}
                  href={"/design-services/graphic-design/"}
                >
                  Graphic Design
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
