import { useEffect } from 'react';

function useWindowResize(callback) {
    useEffect(() => {
        callback();
        const resizeHandler = () => callback();
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);
}

export default useWindowResize;
