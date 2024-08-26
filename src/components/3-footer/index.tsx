import { isDarkTheme, themeApplyMode } from "@/utils";
import { Button } from "../ui/button";

export function Footer() {
    return (
        <footer className="p-4 bg-sky-600 flex items-center justify-between">
            <h1 className="">Footer</h1>

            <Button
                className="text-foreground"
                size={"sm"}
                variant={"outline"}
                onClick={() => themeApplyMode(isDarkTheme() ? "light" : "dark")}
            >
                Now {isDarkTheme() ? "Dark" : "Light"} Mode
            </Button>
            
        </footer>
    );
}
