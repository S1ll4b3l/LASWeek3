import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-red-600 text-xl rounded-md md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;