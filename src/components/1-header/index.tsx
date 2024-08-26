import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export function Header() {
    return (
        <header className="p-4 bg-sky-600 flex items-center justify-between">
            <h1 className="">Header</h1>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </header>
    );
}
