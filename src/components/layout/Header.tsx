'use client';

import { useState } from 'react';
import { Menu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">PersonaPulse</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <a href="#contact" className="hidden md:inline-flex">
            <Button>Contact Me</Button>
          </a>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-4">
                  <a href="/" className="mb-4 flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-bold">PersonaPulse</span>
                  </a>
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                        <a
                          href={link.href}
                          className="text-lg font-medium"
                          onClick={() => setSheetOpen(false)}
                        >
                          {link.name}
                        </a>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
