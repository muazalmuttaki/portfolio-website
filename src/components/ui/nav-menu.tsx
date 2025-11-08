import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import  { Link }from "react-router";
 

export const NavMenu = () => (
  <NavigationMenu >
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="hover:text-accent hover:bg-orange-100/40 text-rose-200 font-bold" to="#">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
       
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="hover:text-accent hover:bg-orange-100/40 text-rose-200 font-bold" to="#">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="hover:text-accent hover:bg-orange-100/40 text-rose-200 font-bold" to="#">Skills</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

            <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="hover:text-accent hover:bg-orange-100/40 text-rose-200  font-bold" to="#">Education</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link className="hover:text-accent hover:bg-orange-100/40 text-rose-200  font-bold" to="#">Projects</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);
