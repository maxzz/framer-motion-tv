import { useSnapshot } from "valtio";
import { appSettings } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { Demo1Simple } from "./1-demos/1-simple";
import { Demo2Accordion } from "./1-demos/2-accordion";

function MotionWrapper({ children }: { children: React.ReactNode; }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5 }}
        >
            {children}
        </motion.div>
    );
}

function AllDemos() {
    const demo = useSnapshot(appSettings).demo;

    if (demo === "simple") {
        return (
            <MotionWrapper key={"simple"}>
                <Demo1Simple />
            </MotionWrapper>
        );
    }

    if (demo === "accordion") {
        return (
            <MotionWrapper key={"accordion"}>
                <Demo2Accordion />
            </MotionWrapper>
        );
    }
}

export function Main() {
    return (
        <main className="p-4">
            <AnimatePresence initial={false}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 5 }}
                >
                    <AllDemos />
                </motion.div>
            </AnimatePresence>
        </main>
    );
}
