import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AddIcon from '@mui/icons-material/Add';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button variant="outline" className="rounded-full w-[40px] h-[40px] bg-red-600"><AddIcon className="text-white"/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post Your FeedBack</DialogTitle>
        
        </DialogHeader>
       
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
