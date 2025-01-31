import { Link } from "@inertiajs/react";

export default function NavLink({ children, href, ...props }) {
  const isActive = href.split('/')[3] == route().current()

  return (
    <Link 
      {...props}
      href={href}
      className={`font-bold ${isActive ? 'bg-primary' : ''}`}
    >
      {children}
    </Link>
  );
}
