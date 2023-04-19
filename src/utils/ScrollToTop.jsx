import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setShowScrollTopBtn(true)
            } else {
                setShowScrollTopBtn(false)
            }
        });
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        showScrollTopBtn &&
        <button onClick={scrollUp} className='scrollToTopBtn'>
            <FontAwesomeIcon icon={faAnglesUp} />
        </button>
    )
}

export default ScrollToTop;