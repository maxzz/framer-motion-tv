import { useSnapshot } from "valtio";
import { appSettings } from "@/store";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { Demo1Simple } from "../1-demos/1-simple";
import { Demo2Accordion } from "../1-demos/2-accordion";
import { TestDescendant } from "./7-test-descendant";

const transitionA: AnimationProps = {
    initial: { opacity: 0, scale: 0, transformOrigin: "top right" },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0, transformOrigin: "top left", transition: { duration: 0.5 } },
    transition: { duration: 2 },
}

export function Layout1() {
    const demo = useSnapshot(appSettings).demo;
    return (
        <main className="p-4">
            <TestDescendant />

            <AnimatePresence initial={false} mode="popLayout">

                {demo === "simple" && (
                    <motion.div
                        {...transitionA}
                        key={"simple"}
                    >
                        <Demo1Simple />
                    </motion.div>
                )}

                {demo === "accordion" && (
                    <motion.div
                        {...transitionA}
                        key={"accordion"}
                    >
                        <Demo2Accordion />
                    </motion.div>
                )}

            </AnimatePresence>
        </main>
    );
}
