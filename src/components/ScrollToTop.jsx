import { useEffect } from 'react';
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
          window.scrollTo({top: 0}); // scrolls to very top
    }, [pathname]);
    return null
}

export default ScrollToTop