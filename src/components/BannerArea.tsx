import React from 'react'

const BannerArea = () => {
    return (
        <>
            {/* Ad banner area start */}
            <section className="furniture-ad pb-100">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xxl-7 col-xl-6">
                            <div
                                className="furniture-ad__item h-100 bg-image"
                                // data-background="assets/imgs/furniture/ad/ad-discount.png"
                                style={{ backgroundImage: 'url(assets/imgs/furniture/ad/ad-discount.png)' }}
                            >
                                <div className="fad-content">
                                    <h6 className="text-white mb-20 text-uppercase">
                                        HOT DEAL furniture
                                    </h6>
                                    <h2 className="text-capitalize text-white">
                                        Furniture limit offer <br /> 30% Off
                                    </h2>
                                    <a className="border__btn-f mt-35" href="product-details.html">
                                        Buy Now
                                        <span>
                                            <i className="fa-regular fa-angle-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div
                                className="furniture-ad__item  h-100 bg-image"
                                // data-background="assets/imgs/furniture/ad/ad-timer.png"
                                style={{ backgroundImage: 'url(assets/imgs/furniture/ad/ad-timer.png)' }}
                            >
                                <div className="fad-content fad-timer text-center">
                                    <h6 className="text-white mb-20 text-uppercase">
                                        HOT DEAL furniture
                                    </h6>
                                    <h2 className="text-capitalize text-white mb-30">
                                        Deals OF the Week
                                    </h2>
                                    <div className="countdown-wrapper">
                                        <ul>
                                            <li>
                                                <span id="days">24</span>days
                                            </li>
                                            <li>
                                                <span id="hours">1</span>hrs
                                            </li>
                                            <li>
                                                <span id="minutes">7</span>mins
                                            </li>
                                            <li>
                                                <span id="seconds">43</span>secs
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="border__btn-f mt-40" href="product-details.html">
                                        Buy Now
                                        <span>
                                            <i className="fa-regular fa-angle-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ad banner area end */}
        </>
    )
}

export default BannerArea