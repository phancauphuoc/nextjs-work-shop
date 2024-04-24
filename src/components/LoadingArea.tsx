import React, { useEffect, useRef } from 'react'

const LoadingArea = () => {
    const preloaderRef = useRef(null);
    useEffect(() => {
        const preloader: any = preloaderRef.current;
        if (preloader) {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 2000);
        }
    }, []);

    return (
        <>
            {/* preloader start */}
            <div id="preloader" ref={preloaderRef}>
                <div className="bd-loader-inner">
                    <div className="bd-loader">
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                        <span className="bd-loader-item" />
                    </div>
                </div>
            </div>
            {/* preloader start */}
        </>
    )
}

export default LoadingArea