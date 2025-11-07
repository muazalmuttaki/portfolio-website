// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import  Logo  from "./logo";
// import { NavMenu } from "./nav-menu";

// export const NavigationSheet = () => {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline" size="icon" className="rounded-full">
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <Logo />
//         <NavMenu orientation="vertical" className="mt-12" />
//       </SheetContent>
//     </Sheet>
//   );
// };


import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { NavMenu } from "./nav-menu";

// ✅ NavigationSheet Component
export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col items-start p-6">
        <Logo />
        {/* এখানে orientation prop ব্যবহার করা এখন নিরাপদ */}
        <NavMenu {...({ orientation: "vertical", className: "mt-12 w-full" } as any)} />
      </SheetContent>
    </Sheet>
  );
};
