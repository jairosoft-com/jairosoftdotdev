"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { cn } from "../lib/utils";

interface MobileMenuProps {
  user?: any;
}

const servicesItems = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/services#mobile-development", label: "Mobile Development" },
  { href: "/services#consulting", label: "Technical Consulting" },
  { href: "/services#ui-ux", label: "UI/UX Design" },
  { href: "/services#devops", label: "DevOps & Cloud" },
  { href: "/services#performance", label: "Performance Optimization" },
];

export default function MobileMenu({ user }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
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
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [path] = href.split("#");
      return pathname === path;
    }
    return pathname === href;
  };

  const linkClassName = (href: string) =>
    cn(
      "block w-full text-left px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset focus:bg-indigo-50 focus:text-indigo-600",
      "active:bg-indigo-100 active:scale-95 transform",
      isActive(href) && "text-indigo-600 bg-indigo-50 border-r-2 border-indigo-600"
    );

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-80 p-0 animate-in slide-in-from-right duration-300"
        >
          <SheetHeader className="p-6 border-b">
            <SheetTitle className="text-left">Navigation Menu</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col">
            <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
              <CollapsibleTrigger 
                className={cn(
                  "flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset focus:bg-indigo-50 focus:text-indigo-600",
                  pathname === "/services" && "text-indigo-600 bg-indigo-50"
                )}
                aria-expanded={isServicesOpen}
                aria-controls="services-menu"
              >
                <span>Services</span>
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200", 
                    isServicesOpen && "rotate-180"
                  )} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent 
                id="services-menu"
                className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1"
              >
                <div className="bg-gray-50 border-y">
                  {servicesItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block w-full text-left px-8 py-3 text-gray-600 hover:text-indigo-600 hover:bg-white transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset focus:bg-white focus:text-indigo-600",
                        "transform hover:translate-x-1"
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={linkClassName("/about")}
            >
              About
            </Link>

            <button
              onClick={() => handleNavigation("/#portfolio")}
              className={linkClassName("/#portfolio")}
              aria-label="Go to portfolio section"
            >
              Portfolio
            </button>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={linkClassName("/contact")}
            >
              Contact
            </Link>

            <div className="border-t mt-4 pt-4 px-4 space-y-3">
              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
                    >
                      Dashboard
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start hover:bg-gray-100 transition-all duration-200 focus:ring-2 focus:ring-indigo-500"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-indigo-500">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}