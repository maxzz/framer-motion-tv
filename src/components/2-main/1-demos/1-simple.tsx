import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Simple() {
    const [show, setShow] = useState(false);
    const [idDone, setIdDone] = useState(false);
    return (
        <div className="my-4 text-sm">
            <button
                className="px-2 py-1 min-w-16 border-sky-600 border rounded shadow active:scale-95"
                type="button"
                onClick={() => {
                    !show && setIdDone(false);
                    setShow(v => !v);
                }}
            >
                {show ? "Hide" : "Show"}
            </button>

            <div className="border-sky-600 border-b">
                {idDone ? 'exit animation done' : 'element visible'}
            </div>

            <AnimatePresence onExitComplete={() => setIdDone(true)}>
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
                        <h1 className="text-2xl">
                            Simple
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}