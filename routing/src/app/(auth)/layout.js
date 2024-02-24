'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

const navLink = [
  { name: 'Rgister', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forget Password', href: '/forgotPassword' },
];
export default function AuthLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      {navLink.map((lk) => {
        const isActive = pathname.startsWith(lk.href);
        return (
          <Link
            href={lk.href}
            key={lk.name}
            className={isActive ? 'font-bold mr-4' : 'text-blue-600 mr-3'}
          >
            {lk.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
