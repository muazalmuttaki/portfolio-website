

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/Input"
import { Search } from "lucide-react"
 

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"> <Search /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="italic text-center">Search Your Blog </DialogTitle>
 
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input id="name-1" name="name"  placeholder="Search your Blog" />
            </div>
 
          </div>
        <div className="flex justify-center gap-4 mt-4">   
          <DialogFooter>
            <Button  type="submit">Search</Button>
          </DialogFooter>
          <DialogClose>
            <Button type="reset">Cancel</Button>
          </DialogClose>
        </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
