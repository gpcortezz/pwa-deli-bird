"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import { useAuthContext } from "@/components/AuthProvider";

export function Sidebar() {
  const { user, logout } = useAuthContext(); // Obtener logout correctamente
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (name) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    {
      name: "Settings",
      href: "/settings",
      subItems: [
        { name: "General", href: "/settings/general" },
        { name: "Privacy", href: "/settings/privacy" },
      ],
    },
    { name: "Help", href: "/help" },
    { 
      name: "Logout", 
      action: logout, // Ahora logout está definido correctamente
      icon: <LogOut className="h-4 w-4" />,
    },
  ];

  const renderMenuItem = (item) => (
    <div key={item.name}>
      {item.subItems ? (
        <Button variant="ghost" className="w-full justify-between" onClick={() => toggleSubMenu(item.name)}>
          {item.name}
          {openSubMenu === item.name ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      ) : item.action ? (
        <Button variant="ghost" className="w-full justify-start" onClick={item.action}>
          {item.icon} 
          <span className="ml-2">{item.name}</span>
        </Button>
      ) : (
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href={item.href}>{item.name}</Link>
        </Button>
      )}
      {item.subItems && openSubMenu === item.name && (
        <div className="ml-4">
          {item.subItems.map((subItem) => (
            <Button key={subItem.name} variant="ghost" className="w-full justify-start" asChild>
              <Link href={subItem.href}>{subItem.name}</Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <nav className="space-y-2">{menuItems.map(renderMenuItem)}</nav>
    </aside>
  );
}
