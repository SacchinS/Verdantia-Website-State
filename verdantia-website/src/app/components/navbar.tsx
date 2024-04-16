// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="bg-custom-green py-3 mt-5"></div>
      <div className="container mx-auto flex items-center justify-between py-4 px-6" style={{ fontFamily: 'Bellota Text' }}>
        <div className="mx-20">
          <div className="text-black" style={{ fontSize: '4vh' }}>
            VERDANTIA | Careers
          </div>
        </div>
        <div className="flex items-center space-x-4 mx-20" style={{ fontSize: '3vh' }}>
          <NavLink href="/" text="Home" />
          <NavLink href="/benefits" text="Benefits" />
          <NavLink href="/jobs" text="Jobs" />
          <NavLink href="/portal" text="Portal" />
          <div>
            <img src="/images/user.png" alt="Account" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <span className="text-black cursor-pointer hover:text-gray-800 hover:underline">{text}</span>
    </Link>
  );
};

export default Navbar;
