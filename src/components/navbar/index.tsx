import { NAVLINKS } from "../../constants";
import Button from "./button";

export default function Navbar() {
  return (
    <header className="w-screen fixed top-0 left-0 z-50 flex-center bg-black min-h-[7vh]">
      <nav className="container mx-auto flex-between px-5 2xl:px-0">
        <Button img="/logo.svg" alt="Apple Logo" />

        <ul className="flex-center gap-8">
          {NAVLINKS.map(({ label }) => (
            <li key={label}>
              <a
                className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
                href="#"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <Button img="/search.svg" alt="Search" />
          <Button img="cart.svg" alt="Cart" />
        </div>
      </nav>
    </header>
  );
}
