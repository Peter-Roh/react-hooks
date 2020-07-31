import { useEffect } from "react";

export const useClick = (onClick) => {
    const element = useRef();

    useEffect(() => {
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if(element.current) {
                element.current.removeEventLIstener("click", onClick)
            }
        };
    }, []);
    return element;
};
