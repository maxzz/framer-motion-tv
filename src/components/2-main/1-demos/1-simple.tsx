import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeoutFn } from "react-use";

export function Demo1Simple() {
    const [show, setShow] = useState(false);
    const [idDone, setIdDone] = useState(false);




    const [state, setState] = useState('Not called yet');

    function fn() {
        setState(`called at ${Date.now()}`);
    }

    const [isReady, cancel, reset] = useTimeoutFn(fn, 5000);
    const cancelButtonClick = useCallback(() => {
        if (isReady() === false) {
            cancel();
            setState(`cancelled`);
        } else {
            //reset();
            setState('Not called yet');
        }
    }, []);

    const readyState = isReady();




    return (
        <div className="my-4 text-sm">

            <div className="py-1 border-sky-600 border-b flex items-center justify-between gap-2">
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

                <div className="text-xs">
                    {idDone ? 'exit animation done' : 'element visible'}
                </div>
            </div>

            <div>
                <div>
                    {readyState !== null ? 'Function will be called in 5 seconds' : 'Timer cancelled'}
                </div>
                <button onClick={cancelButtonClick}> {readyState === false ? 'cancel' : 'restart'}
                    timeout
                </button>
                <br />
                <div>
                    Function state: {readyState === false ? 'Pending' : readyState ? 'Called' : 'Cancelled'}
                </div>
                <div>
                    {state}
                </div>
            </div>

            <div className="grid place-items-center">
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
                            <div className="my-4 size-12 bg-red-500 rounded-md border-input border-4">
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
}
