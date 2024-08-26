import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export function Header() {
    return (
        <header className="p-4 bg-muted border-foreground/10 border-b flex items-center justify-between">
            <h1 className="">Framer Motion Demos</h1>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select demo" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="demo1">Simple</SelectItem>
                        <SelectItem value="demo2">Accordion</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </header>
    );
}
