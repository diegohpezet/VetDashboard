import NavLink from "./Components/NavLink"
import { usePage } from "@inertiajs/react"
import { useTranslation } from "react-i18next";

export default function MainLayout({ children }) {
  const user = usePage().props.auth.user;
  const { t } = useTranslation();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200 min-h-full">
          {/* Navbar */}
          <div className="navbar bg-base-100 py-5">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden">
              <i className="ri-menu-2-line"></i>
            </label>
            <div className="flex-1">
              <h1 className="text-2xl font-bold hidden md:block">{ t('greeting', { name: user.name })}!</h1>
            </div>
            <div className="flex-none px-2">
              <i className="ri-phone-fill"></i>+54 11 2345-6789
            </div>
          </div>
          {/* Main content */}
          <main>{children}</main>
        </div>
        { /* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-neutral text-neutral-content min-h-full w-80 p-4 flex flex-col h-full">
            <h1 className="text-2xl">VetDashboard</h1>
            <li className="mt-3">
              <NavLink href={route('dashboard')}>{ t('dashboard') }</NavLink>
            </li>
            <li>
              <NavLink href={route('services.index')}>{ t('services') }</NavLink>
            </li>
            <li>
              <NavLink href={route('owners.index')}>{ t('owners') }</NavLink>
            </li>
            <li>
              <NavLink href={route('pets.index')}>{ t('pets') }</NavLink>
            </li>
            <li>
              <NavLink href={route('appointments.index')}>{ t('appointments') }</NavLink>
            </li>

            {/* Empujar estos elementos hacia abajo */}
            <div className="mt-auto">
              <li>
                <NavLink href={route('profile.edit')}>{  t('profile') }</NavLink>
              </li>
              <li>
                <NavLink method="post" href={route('logout')}>{  t('logout') }</NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}