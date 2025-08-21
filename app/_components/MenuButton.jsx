import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function MenuButton({ menuOpen, setMenuOpen }) {
  return (
    <span
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-paragraph h-8 w-8 text-white"
      aria-label="Toggle Menu"
    >
      {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
    </span>
  );
}

export default MenuButton;
