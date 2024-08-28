import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeoutImperative } from "@/components/util-hooks";

const timeout = 1000;

export function Demo1Simple() {
    const [show, setShow] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

    const { set } = useTimeoutImperative(() => {
        setShowMsg(false);
    });

    return (
        <div className="my-4 text-sm">

            <div className="py-1 border-sky-600 border-b flex items-center justify-between gap-2">
                <button
                    className="px-2 py-1 min-w-16 border-sky-600 border rounded shadow active:scale-95"
                    type="button"
                    onClick={() => {
                        !show && setIsDone(false);
                        setShowMsg(true);
                        setShow(v => !v);
                    }}
                >
                    {show ? "Hide" : "Show"}
                </button>

                <div className="text-xs">
                    {showMsg && (isDone ? 'exit animation done' : 'element visible')}
                </div>
            </div>

            <div className="grid place-items-center">
                <AnimatePresence
                    onExitComplete={() => {
                        setIsDone(true);
                        set(timeout);
                    }}
                >
                    {show && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 3,
                                    ease: "easeOut",
                                },
                            }}
                            transition={{
                                duration: 2,
                            }}
                        >
                            <div className="my-4 size-12 bg-red-500 rounded-md border-input border-4">
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
}
