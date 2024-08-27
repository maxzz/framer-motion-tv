import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeoutFn } from "react-use";
import { Button } from "@/components/ui/button";

export function Demo1Simple() {
    const [show, setShow] = useState(false);
    const [idDone, setIdDone] = useState(false);




    const [state, setState] = useState('Not called yet');

    function fn() {
        const date = new Date();

        const msg = new Intl.DateTimeFormat('en-GB', {
            //dateStyle: 'full',
            timeStyle: 'long',
            //timeZone: 'Australia/Sydney',
          }).format(date)

        setState(`called at ${msg}`);
    }

    const [isReady, cancel, reset] = useTimeoutFn(fn, 500);
    const cancelButtonClick = useCallback(() => {
        if (isReady() === false) {
            cancel();
            setState(`cancelled`);
        } else {
            reset();
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

            <div className="py-4 text-xs inline-grid grid-rows-[auto_auto_auto_1fr] items-center gap-1">
                <div>
                    Promise: {readyState !== null ? 'Function will be called in 0.5 second' : 'Timer cancelled'}
                </div>

                <div>
                    Function state: {readyState === false ? 'Pending' : readyState ? 'Called' : 'Cancelled'}
                </div>

                <div>
                    State: {state}
                </div>

                <Button onClick={cancelButtonClick}>
                    {readyState === false ? 'Cancel' : 'Restart'}{' '}
                    timeout
                </Button>
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
