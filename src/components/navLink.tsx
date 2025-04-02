import Link from "next/link";

export interface InavLink {
  href: string;
  title: string;
}

const NavLink: React.FC<InavLink> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent  md:p-0 hover:text-white "
      aria-current="page"
    >
      {title}
    </Link>
  );
};

export default NavLink;
