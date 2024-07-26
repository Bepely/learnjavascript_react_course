import { useState, useEffect } from "react";
import './style.css';

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (scrollPosition / documentScrollableHeight) * 100;
    return scrolledPercentage;
};

function PageScroller() {
    const [scrollerWidth, setScrollerWidth] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrollerWidth(handleScroll());
        };

        window.addEventListener("scroll", onScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div
            id="pageScroller"
            style={{
                width: `${scrollerWidth}%`,
            }}
        ></div>
    );
}

export default PageScroller;
