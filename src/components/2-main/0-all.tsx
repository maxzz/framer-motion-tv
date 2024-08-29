import { useSnapshot } from "valtio";
import { appSettings } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { Demo1Simple } from "./1-demos/1-simple";
import { Demo2Accordion } from "./1-demos/2-accordion";

function MotionWrapper({ children, ...rest }: { children: React.ReactNode; key: string; }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 5 }}
            {...rest}
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
    const demo = useSnapshot(appSettings).demo;
    return (
        <main className="p-4">
            <AnimatePresence initial={false}>
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 5 }}
                > */}
                {/* <AllDemos /> */}
                {/* </motion.div> */}


                {demo === "simple" && (
                    <MotionWrapper key={"simple"}>
                        <Demo1Simple />
                    </MotionWrapper>
                )}

                {demo === "accordion" && (
                    <MotionWrapper key={"accordion"}>
                        <Demo2Accordion />
                    </MotionWrapper>
                )}

            </AnimatePresence>
        </main>
    );
}
