'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

const menuItems = [
  {
    title: 'Conceitos',
    href: '/',
  },
  {
    title: 'Camadas',
    href: '/layers',
    items: [
      {
        name: 'Universal',
        description: 'Universal things',
        href: '/layers',
      },
      {
        name: 'Base',
        description: 'Base things',
        href: '/layers',
      },
      {
        name: 'Now',
        description: 'Now things',
        href: '/layers',
      },
      {
        name: 'World',
        description: 'World things',
        href: '/layers',
      },
    ],
  },
];

export default function Component() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Ideas</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger hasChildrens={!!menu.items}>
                    <Link href={menu.href}>{menu.title}</Link>
                  </NavigationMenuTrigger>
                  {menu.items && (
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {menu.items.map((item) => (
                          <ListItem
                            key={item.name}
                            title={item.name}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Menu description</SheetDescription>
            </VisuallyHidden>
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setIsOpen}
            >
              <MountainIcon className="mr-2 h-4 w-4" />
              <span className="font-bold">Ideas</span>
            </MobileLink>
            <div className="my-4 h-[calc(100vh-8rem)] overflow-y-auto">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col space-y-3 pt-6"
                  >
                    <Link href={item.href}>
                      <h4 className="font-medium">{item.title}</h4>
                    </Link>
                    {item.items?.map((subItem) => (
                      <MobileLink
                        key={subItem.name}
                        href={subItem.href}
                        onOpenChange={setIsOpen}
                      >
                        {subItem.name}
                      </MobileLink>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button className="hidden md:inline-flex">Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ title, children, href }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
