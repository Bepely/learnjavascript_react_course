import { useState } from "react";
import './style.css'

function PageScroller() {
    const [scrollerWidth, setScrollerWidth] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const documentScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercentage = (scrollPosition / documentScrollableHeight) * 100;
        setScrollerWidth(scrolledPercentage);
    };

    window.addEventListener("scroll", handleScroll);

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
