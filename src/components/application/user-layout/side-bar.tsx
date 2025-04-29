"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 

import DashBoardHomeIcon from "@/assets/dashboard/icons/dashboard-active.svg";
import ShipIcon from "@/assets/dashboard/icons/ship.svg";
import GlobeIcon from "@/assets/dashboard/icons/globe.svg";
import BellIcon from "@/assets/dashboard/icons/bell.svg";
import CreditCardIcon from "@/assets/dashboard/icons/credit-card.svg";
import LocateFixedIcon from "@/assets/dashboard/icons/locate-fixed.svg";
import DollarSignIcon from "@/assets/dashboard/icons/badge-dollar-sign.svg";
import HelpingHandIcon from "@/assets/dashboard/icons/hand-helping.svg";
import ProfileImagePlaceHolder from "@/assets/dashboard/images/place-holder-img.png";
import LogOutIcon from "@/assets/dashboard/icons/log-out.svg";

import { NavLink } from "@/types/global";


const navLinks: NavLink[] = [
  { label: "Dashboard", href: "/", icon: DashBoardHomeIcon },
  { label: "Shipment", href: "/shipment", icon: ShipIcon },
  { label: "Our Services", href: "/services", icon: GlobeIcon },
  { label: "Notification", href: "/notification", icon: BellIcon },
  { label: "Wallet", href: "/wallet", icon: CreditCardIcon },
  { label: "My Addresses", href: "/addresses", icon: LocateFixedIcon },
  { label: "Invite & Earn", href: "/inviteandearn", icon: DollarSignIcon },
  { label: "Help Center", href: "/help", icon: HelpingHandIcon },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <section className="hidden w-60 h-full bg-white overflow-y-auto gap-y-10 pb-8 md:flex flex-col justify-between border-r border-e5e5e5">
      <div className="w-full flex flex-col">
      <span className="w-full h-24 border border-e5e5e5"></span>
      <nav className="px-7 mt-38p flex flex-col gap-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`flex items-center gap-x-2 h-14 w-full px-4 rounded-lg ${
              pathname === link.href ? "bg-262a48" : ""
            }`}
          >
            <Image src={link.icon} alt={link.label} />
            <span className={`text-base  ${
              pathname === link.href ? "text-ebffe2 font-semiBold600" : "text-525252 font-normal400"
            }`}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
      </div>
      <div className="w-full px-7">
        <div className="flex items-center h-20 mb-2 gap-x-2">
        <Image src={ProfileImagePlaceHolder} alt="profile image" />
        <div className="text-525252 text-sm font-normal400">
          <span className="block">First Name</span>
          <span className="block">Last Name</span>
        </div>
        </div>
        <button className="h-20 flex items-center gap-x-2">
        <Image src={LogOutIcon} alt="log out" />
        <span>Logout</span>
        </button>
      </div>
    </section>
  );
}
