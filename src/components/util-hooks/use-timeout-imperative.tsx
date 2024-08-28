import { useRef, useEffect, useCallback } from "react";

export function useTimeoutImperative(callback: () => void) {
    const cbRef = useRef(callback);
    const idRef = useRef<ReturnType<typeof setTimeout> | null>();

    useEffect(
        () => {
            cbRef.current = callback;
        }, [callback]
    );

    useEffect(
        () => {
            return clear;
        }, []
    );

    const set = useCallback(
        (delay: number | null) => {
            if (delay === null) {
                clear();
            } else {
                idRef.current = setTimeout(() => cbRef.current(), delay);
            }
        }, []
    );

    const clear = useCallback(
        () => {
            if (idRef.current) {
                clearTimeout(idRef.current);
                idRef.current = null;
            }
        }, []
    );

    return { set, clear };
}
