import { Button } from "../ui/button";
import { useSnapshot } from "valtio";
import { appSettings } from "@/store";

export function Footer() {
    const isDark = useSnapshot(appSettings).theme === "dark";
    return (
        <footer className="p-4 bg-muted/30 border-foreground/10 border-t flex items-center justify-between">
            <h1 className="">Footer</h1>

            <Button
                className="1text-foreground"
                size={"sm"}
                variant={"outline"}
                onClick={() => appSettings.theme = isDark ? "light" : "dark"}
            >
                Now {isDark ? "Dark" : "Light"} Mode
            </Button>

        </footer>
    );
}
