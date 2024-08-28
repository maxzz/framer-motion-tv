import { useSnapshot } from "valtio";
import { appSettings } from "@/store";
import { Demo1Simple } from "./1-demos/1-simple";
import { Demo2Accordion } from "./1-demos/2-accordion";

function AllDemos() {
    const demo = useSnapshot(appSettings).demo;

    if (demo === "simple") {
        return <Demo1Simple />;
    }

    if (demo === "accordion") {
        return <Demo2Accordion />;
    }
}

export function Main() {
    return (
        <main className="p-4">
            <AllDemos />
        </main>
    );
}
