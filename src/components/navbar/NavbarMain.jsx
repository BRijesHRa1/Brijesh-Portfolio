import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  return (
    // Hide by default; show as a flex container at 520px and above
    <nav className="hidden xxs:flex max-w-[800px] mx-auto w-full 
                    fixed left-1/2 -translate-x-1/2 z-20 gap-2 mt-12">
      <div className="flex text-sm md:text-base justify-between w-full max-w-[800px] mx-auto
                      bg-black items-center rounded-r-full rounded-l-full border-grey border-[0.5px]">
        <NavbarLogo />
        <div>
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
