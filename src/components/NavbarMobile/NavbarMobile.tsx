import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Homa', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Projects', url: '/Projects' },
  { label: 'Videos', url: '/Videos' },
  { label: 'Contact', url: '/Contact' }
];

const NavbarMobile = ({ containerStyle } : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center flex-col gap-4">
        {menuLinks.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url}  className='text-white hover:text-accent transition-all'>{item.label}</Link>
              </li>
            </>
          );
        })}
      </menu>
    </nav>
  )
}

export default NavbarMobile
