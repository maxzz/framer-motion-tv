import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Simple() {
    const [show, setShow] = useState(false);
    return (
        <div className="my-4">
            <button className="px-2 py-1 min-w-16 border-sky-600 border rounded shadow active:scale-95" type="button" onClick={() => setShow(v => !v)}>
                {show ? "Hide" : "Show"}
            </button>

            <AnimatePresence>
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