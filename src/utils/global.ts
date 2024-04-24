import { useEffect } from "react";

//scroll keeping header and show btn back to top
export function ScrollHandler() {
    useEffect(() => {
        const handleScroll = () => {
            const headerSticky = document.getElementById('header-sticky');
            const backTop = document.getElementById('backtop');
            if (headerSticky && window.scrollY > 250) {
                headerSticky.classList.add('sticky');
                backTop?.classList.add('active-progress');
            } else if (headerSticky) {
                headerSticky.classList.remove('sticky');
                backTop?.classList.remove('active-progress');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null;
}

//click outside remove modal contact
export function useOutsideAlerter(ref: any, e1: any, e2: any) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            // if (ref.current && !ref.current.contains(event.target)) {
            //     alert("You clicked outside of me!");
            //     console.log('aaa');
            // }
            // if (ref.current.classList.contains('info-open')) {
            //     e1.current.classList.remove('info-open');
            //     e2.current.classList.remove('overlay-open');
            // }
            // console.log('ref', ref);
            // debugger
            if (!(ref.current.contains(event.target))) {
                if (e1.current.classList.contains('info-open')) {
                    e1.current.classList.remove('info-open');
                    e2.current.classList.remove('overlay-open');
                }
            }
            // debugger
        }
        // Bind the event listener
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}