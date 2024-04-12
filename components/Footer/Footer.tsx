import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";

import DecorativeSwoops from "./DecorativeSwoops";
// import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className="flex justify-center text-center ">
      {/* <DecorativeSwoops /> */}
      <div
        className={
          "flex max-md:flex-col justify-between max-md:items-center items-baseline max-md:gap-16 gap-8 w-full pb-12 max-w-screen-2xl mx-auto px-4"
        }
      >
        <div>
          <Logo mobileAlignment="center" />
          {/*
            NOTE: If you'd like to build your blog on top
            of this code, the license requires that you leave
            this paragraph untouched. Check out LICENSE.md
            for more information.
          */}
          <p className={"mt-6 text-sm max-w-72"}>
            Blog template created by{" "}
            <a href="https://www.joshwcomeau.com/">Josh W. Comeau</a>. Check out{" "}
            <a href="https://www.joyofreact.com/">The Joy of React</a> to learn
            how to build dynamic React apps like this one!
          </p>
        </div>
        <nav className="text-left">
          <h2 className={"mt-6 p-0 text-xl font-semibold"}>Links</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <Link href="/rss">RSS feed</Link>
            </li>
            <li>
              <Link href="/todo">Terms of Use</Link>
            </li>
            <li>
              <Link href="/todo">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <a href="https://twitter.com/JoshWComeau">Twitter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
