const NavbarLogo = () => {
  return (
    <div>
      {/* Hidden on xs; visible from sm and up */}
      <h1 className="hidden md:block text-white pl-4 text-2xl font-bold">
        Brijesh
      </h1>

      {/* Visible on xs; hidden from sm and up */}
      <h1 className="block sm:block md:hidden text-white pl-2 font-special font-extrabold text-4xl">
        BR
      </h1>
    </div>
  );
};

export default NavbarLogo;
