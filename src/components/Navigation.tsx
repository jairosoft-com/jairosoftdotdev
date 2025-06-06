"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface NavigationProps {
  className?: string;
}

const servicesItems = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/services#mobile-development", label: "Mobile Development" },
  { href: "/services#consulting", label: "Technical Consulting" },
  { href: "/services#ui-ux", label: "UI/UX Design" },
  { href: "/services#devops", label: "DevOps & Cloud" },
  { href: "/services#performance", label: "Performance Optimization" },
];

export default function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Intersection Observer for active section detection
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const scrollToSection = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path && path !== pathname) {
        // Navigate to the page first, then scroll
        window.location.href = href;
      } else if (hash) {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }
    }
  };

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (pathname === "/" && hash) {
        return activeSection === hash;
      }
      return pathname === path;
    }
    return pathname === href;
  };

  const linkClassName = (href: string) =>
    cn(
      "relative text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium px-3 py-2 rounded-md",
      "hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:bg-indigo-600 before:transition-all before:duration-300 before:-translate-x-1/2",
      isActive(href) 
        ? "text-indigo-600 before:w-full" 
        : "before:w-0 hover:before:w-full"
    );

  return (
    <nav className={cn("hidden md:flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger 
          className={cn(
            "flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-all duration-300 font-medium px-3 py-2 rounded-md",
            "hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
            pathname === "/services" && "text-indigo-600 bg-indigo-50"
          )}
        >
          Services
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          sideOffset={8}
        >
          {servicesItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link
                href={item.href}
                className="w-full text-left focus:bg-indigo-50 focus:text-indigo-600 transition-colors"
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        href="/about"
        className={linkClassName("/about")}
      >
        About
      </Link>

      <Link
        href="/#portfolio"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("/#portfolio");
        }}
        className={linkClassName("/#portfolio")}
      >
        Portfolio
      </Link>

      <Link
        href="/contact"
        className={linkClassName("/contact")}
      >
        Contact
      </Link>
    </nav>
  );
}