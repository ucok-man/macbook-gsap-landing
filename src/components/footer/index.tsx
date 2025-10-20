import { FOOTER_LINKS } from "../../constants";

export default function Footer() {
  return (
    <footer className="container mx-auto py-7 max-lg:px-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr className="my-7 text-[#424245]" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between max-lg:mt-5 gap-5 text-sm">
        <p className="text-sm font-medium">
          Copyright © 2024 Apple Inc. All rights reserved.
        </p>

        <ul className="lg:divide-x flex flex-col lg:flex-row gap-2.5">
          {FOOTER_LINKS.map(({ label, link }) => (
            <li
              key={label}
              className="lg:px-5 cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
            >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
