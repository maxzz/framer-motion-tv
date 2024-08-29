import { useSnapshot } from "valtio";
import { AppDemos, appSettings } from "@/store";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

function SelectDemo() {
    const demo = useSnapshot(appSettings).demo;
    return (
        <Select value={demo} onValueChange={(value) => appSettings.demo = value as AppDemos}>

            <SelectTrigger className="w-[180px]" title="Demo selector">
                <SelectValue placeholder="Select demo" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="simple">Simple</SelectItem>
                <SelectItem value="accordion">Accordion</SelectItem>
            </SelectContent>

        </Select>
    );
}

export function Header() {
    return (
        <header className="p-4 bg-muted/30 border-foreground/10 border-b flex items-center justify-between">
            <div className="relative text-[.45rem]">
                <div className="absolute whitespace-nowrap left-2 top-[-20px] text-sky-300">Framer Motion Demos</div>
                <div className="absolute whitespace-nowrap left-0 top-[-10px]   text-sky-400">Framer Motion Demos</div>
                <div className="absolute whitespace-nowrap left-2 top-[0px]  text-sky-500">Framer Motion Demos</div>
            </div>

            <SelectDemo />
        </header>
    );
}
