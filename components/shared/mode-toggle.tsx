import {Button} from "@/components/ui/button";
import {SunIcon} from "lucide-react";

export function ModeToggle(){
    return(
        <Button variant="ghost" size="icon" className="size-9 rounded-sm cursor-pointer">
            <SunIcon />
        </Button>
    );
}