import { useState, useEffect } from 'react'

export default function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

    useEffect(() => {
        const handleResize = () => {
            setSize(() => [window.innerHeight, window.innerWidth]);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        height: size[0],
        width: size[1]
    };
}