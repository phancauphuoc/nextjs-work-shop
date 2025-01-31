import React from 'react'

const RatingArea = () => {
    return (
        <>
            {/* Ratting area start */}
            <section className="furniture-rating overflow-hidden theme-bg-2">
                <div className="row g-0 align-items-center">
                    <div className="col-xl-6">
                        <div className="furniture-rating__left-item">
                            <div className="furniture-ad__item frl-item bg-furniture">
                                <div className="fad-content">
                                    <h6 className="text-white mb-20 text-uppercase">
                                        HOT DEAL furniture
                                    </h6>
                                    <h2 className="text-capitalize text-white">
                                        Live Furniture <br />
                                        Your Love
                                    </h2>
                                    <a
                                        className="border__btn-f mt-35 bg-white text-black"
                                        href="product-details.html"
                                    >
                                        Buy Now
                                        <span>
                                            <i className="fa-regular fa-angle-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="furniture-rating__right-item">
                            <img
                                className="w-100"
                                src="assets/imgs/furniture/rating/bg-image.png"
                                alt="image"
                            />
                            <div className="rating-dot">
                                <svg
                                    width={64}
                                    height={64}
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        opacity="0.6"
                                        cx={32}
                                        cy={32}
                                        r={32}
                                        transform="rotate(-180 32 32)"
                                        fill="white"
                                    />
                                    <circle
                                        cx={33}
                                        cy={31}
                                        r={7}
                                        transform="rotate(-180 33 31)"
                                        fill="#B18B5E"
                                    />
                                </svg>
                                <ul>
                                    <li>
                                        <h6>Chair Pillow</h6>
                                    </li>
                                    <li className="py-1">
                                        <svg
                                            width={116}
                                            height={16}
                                            viewBox="0 0 116 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_247_27)">
                                                <path
                                                    d="M15.7004 5.93425C15.5829 5.5845 15.2802 5.3295 14.9157 5.27375L10.6734 4.6255L8.76794 0.56625C8.60544 0.22025 8.25819 0 7.87669 0C7.49494 0 7.14794 0.22025 6.98544 0.56625L5.07969 4.62575L0.837444 5.274C0.472944 5.32975 0.170194 5.5845 0.0529438 5.9345C-0.0643062 6.2845 0.0241938 6.67 0.281944 6.9345L3.37994 10.1112L2.64619 14.6055C2.58569 14.9775 2.74344 15.3515 3.05119 15.569C3.35869 15.7865 3.76469 15.8085 4.09544 15.626L7.87694 13.5347L11.6584 15.626C11.8077 15.7085 11.9719 15.749 12.1354 15.749C12.3344 15.749 12.5334 15.6885 12.7027 15.569C13.0104 15.3517 13.1679 14.9777 13.1074 14.6055L12.3737 10.1112L15.4719 6.9345C15.7292 6.67 15.8177 6.2845 15.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip1_247_27)">
                                                <path
                                                    d="M40.7004 5.93425C40.5829 5.5845 40.2802 5.3295 39.9157 5.27375L35.6734 4.6255L33.7679 0.56625C33.6054 0.22025 33.2582 0 32.8767 0C32.4949 0 32.1479 0.22025 31.9854 0.56625L30.0797 4.62575L25.8374 5.274C25.4729 5.32975 25.1702 5.5845 25.0529 5.9345C24.9357 6.2845 25.0242 6.67 25.2819 6.9345L28.3799 10.1112L27.6462 14.6055C27.5857 14.9775 27.7434 15.3515 28.0512 15.569C28.3587 15.7865 28.7647 15.8085 29.0954 15.626L32.8769 13.5347L36.6584 15.626C36.8077 15.7085 36.9719 15.749 37.1354 15.749C37.3344 15.749 37.5334 15.6885 37.7027 15.569C38.0104 15.3517 38.1679 14.9777 38.1074 14.6055L37.3737 10.1112L40.4719 6.9345C40.7292 6.67 40.8177 6.2845 40.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip2_247_27)">
                                                <path
                                                    d="M65.7004 5.93425C65.5829 5.5845 65.2802 5.3295 64.9157 5.27375L60.6734 4.6255L58.7679 0.56625C58.6054 0.22025 58.2582 0 57.8767 0C57.4949 0 57.1479 0.22025 56.9854 0.56625L55.0797 4.62575L50.8374 5.274C50.4729 5.32975 50.1702 5.5845 50.0529 5.9345C49.9357 6.2845 50.0242 6.67 50.2819 6.9345L53.3799 10.1112L52.6462 14.6055C52.5857 14.9775 52.7434 15.3515 53.0512 15.569C53.3587 15.7865 53.7647 15.8085 54.0954 15.626L57.8769 13.5347L61.6584 15.626C61.8077 15.7085 61.9719 15.749 62.1354 15.749C62.3344 15.749 62.5334 15.6885 62.7027 15.569C63.0104 15.3517 63.1679 14.9777 63.1074 14.6055L62.3737 10.1112L65.4719 6.9345C65.7292 6.67 65.8177 6.2845 65.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip3_247_27)">
                                                <path
                                                    d="M84.7682 5.05043L84.9949 5.53343L85.5224 5.61403L89.7351 6.25776L86.6578 9.41304L86.3054 9.77432L86.3868 10.2724L87.1155 14.736L83.3609 12.6597L82.8769 12.392L82.393 12.6597L78.6381 14.7362L79.3669 10.2724L79.4482 9.77435L79.0959 9.41307L76.0189 6.25788L80.2307 5.61427L80.7582 5.53368L80.9849 5.05071L82.8767 1.02095L84.7682 5.05043Z"
                                                    stroke="#E8C54A"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <g clipPath="url(#clip4_247_27)">
                                                <path
                                                    d="M109.768 5.05043L109.995 5.53343L110.522 5.61403L114.735 6.25776L111.658 9.41304L111.305 9.77432L111.387 10.2724L112.116 14.736L108.361 12.6597L107.877 12.392L107.393 12.6597L103.638 14.7362L104.367 10.2724L104.448 9.77435L104.096 9.41307L101.019 6.25788L105.231 5.61427L105.758 5.53368L105.985 5.05071L107.877 1.02095L109.768 5.05043Z"
                                                    stroke="#E8C54A"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_247_27">
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(25)"
                                                    />
                                                </clipPath>
                                                <clipPath id="clip2_247_27">
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(50)"
                                                    />
                                                </clipPath>
                                                <clipPath id="clip3_247_27">
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(75)"
                                                    />
                                                </clipPath>
                                                <clipPath id="clip4_247_27">
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(100)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                    <li>
                                        <span>USD 190.00</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rating-dot dot-two">
                                <svg
                                    width={64}
                                    height={64}
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        opacity="0.6"
                                        cx={32}
                                        cy={32}
                                        r={32}
                                        transform="rotate(-180 32 32)"
                                        fill="white"
                                    />
                                    <circle
                                        cx={33}
                                        cy={31}
                                        r={7}
                                        transform="rotate(-180 33 31)"
                                        fill="#B18B5E"
                                    />
                                </svg>
                                <ul>
                                    <li>
                                        <h6>Dining Table</h6>
                                    </li>
                                    <li className="py-1">
                                        <svg
                                            width={116}
                                            height={16}
                                            viewBox="0 0 116 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_247_27)">
                                                <path
                                                    d="M15.7004 5.93425C15.5829 5.5845 15.2802 5.3295 14.9157 5.27375L10.6734 4.6255L8.76794 0.56625C8.60544 0.22025 8.25819 0 7.87669 0C7.49494 0 7.14794 0.22025 6.98544 0.56625L5.07969 4.62575L0.837444 5.274C0.472944 5.32975 0.170194 5.5845 0.0529438 5.9345C-0.0643062 6.2845 0.0241938 6.67 0.281944 6.9345L3.37994 10.1112L2.64619 14.6055C2.58569 14.9775 2.74344 15.3515 3.05119 15.569C3.35869 15.7865 3.76469 15.8085 4.09544 15.626L7.87694 13.5347L11.6584 15.626C11.8077 15.7085 11.9719 15.749 12.1354 15.749C12.3344 15.749 12.5334 15.6885 12.7027 15.569C13.0104 15.3517 13.1679 14.9777 13.1074 14.6055L12.3737 10.1112L15.4719 6.9345C15.7292 6.67 15.8177 6.2845 15.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip1_247_27)">
                                                <path
                                                    d="M40.7004 5.93425C40.5829 5.5845 40.2802 5.3295 39.9157 5.27375L35.6734 4.6255L33.7679 0.56625C33.6054 0.22025 33.2582 0 32.8767 0C32.4949 0 32.1479 0.22025 31.9854 0.56625L30.0797 4.62575L25.8374 5.274C25.4729 5.32975 25.1702 5.5845 25.0529 5.9345C24.9357 6.2845 25.0242 6.67 25.2819 6.9345L28.3799 10.1112L27.6462 14.6055C27.5857 14.9775 27.7434 15.3515 28.0512 15.569C28.3587 15.7865 28.7647 15.8085 29.0954 15.626L32.8769 13.5347L36.6584 15.626C36.8077 15.7085 36.9719 15.749 37.1354 15.749C37.3344 15.749 37.5334 15.6885 37.7027 15.569C38.0104 15.3517 38.1679 14.9777 38.1074 14.6055L37.3737 10.1112L40.4719 6.9345C40.7292 6.67 40.8177 6.2845 40.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip2_247_27)">
                                                <path
                                                    d="M65.7004 5.93425C65.5829 5.5845 65.2802 5.3295 64.9157 5.27375L60.6734 4.6255L58.7679 0.56625C58.6054 0.22025 58.2582 0 57.8767 0C57.4949 0 57.1479 0.22025 56.9854 0.56625L55.0797 4.62575L50.8374 5.274C50.4729 5.32975 50.1702 5.5845 50.0529 5.9345C49.9357 6.2845 50.0242 6.67 50.2819 6.9345L53.3799 10.1112L52.6462 14.6055C52.5857 14.9775 52.7434 15.3515 53.0512 15.569C53.3587 15.7865 53.7647 15.8085 54.0954 15.626L57.8769 13.5347L61.6584 15.626C61.8077 15.7085 61.9719 15.749 62.1354 15.749C62.3344 15.749 62.5334 15.6885 62.7027 15.569C63.0104 15.3517 63.1679 14.9777 63.1074 14.6055L62.3737 10.1112L65.4719 6.9345C65.7292 6.67 65.8177 6.2845 65.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip3_247_27)">
                                                <path
                                                    d="M84.7682 5.05043L84.9949 5.53343L85.5224 5.61403L89.7351 6.25776L86.6578 9.41304L86.3054 9.77432L86.3868 10.2724L87.1155 14.736L83.3609 12.6597L82.8769 12.392L82.393 12.6597L78.6381 14.7362L79.3669 10.2724L79.4482 9.77435L79.0959 9.41307L76.0189 6.25788L80.2307 5.61427L80.7582 5.53368L80.9849 5.05071L82.8767 1.02095L84.7682 5.05043Z"
                                                    stroke="#E8C54A"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <g clipPath="url(#clip4_247_27)">
                                                <path
                                                    d="M109.768 5.05043L109.995 5.53343L110.522 5.61403L114.735 6.25776L111.658 9.41304L111.305 9.77432L111.387 10.2724L112.116 14.736L108.361 12.6597L107.877 12.392L107.393 12.6597L103.638 14.7362L104.367 10.2724L104.448 9.77435L104.096 9.41307L101.019 6.25788L105.231 5.61427L105.758 5.53368L105.985 5.05071L107.877 1.02095L109.768 5.05043Z"
                                                    stroke="#E8C54A"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(25)"
                                                    />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(50)"
                                                    />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(75)"
                                                    />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(100)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                    <li>
                                        <span>USD 190.00</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="rating-dot dot-three">
                                <svg
                                    width={64}
                                    height={64}
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        opacity="0.6"
                                        cx={32}
                                        cy={32}
                                        r={32}
                                        transform="rotate(-180 32 32)"
                                        fill="white"
                                    />
                                    <circle
                                        cx={33}
                                        cy={31}
                                        r={7}
                                        transform="rotate(-180 33 31)"
                                        fill="#B18B5E"
                                    />
                                </svg>
                                <ul>
                                    <li>
                                        <h6>Arm Sofa</h6>
                                    </li>
                                    <li className="py-1">
                                        <svg
                                            width={116}
                                            height={16}
                                            viewBox="0 0 116 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_247_27)">
                                                <path
                                                    d="M15.7004 5.93425C15.5829 5.5845 15.2802 5.3295 14.9157 5.27375L10.6734 4.6255L8.76794 0.56625C8.60544 0.22025 8.25819 0 7.87669 0C7.49494 0 7.14794 0.22025 6.98544 0.56625L5.07969 4.62575L0.837444 5.274C0.472944 5.32975 0.170194 5.5845 0.0529438 5.9345C-0.0643062 6.2845 0.0241938 6.67 0.281944 6.9345L3.37994 10.1112L2.64619 14.6055C2.58569 14.9775 2.74344 15.3515 3.05119 15.569C3.35869 15.7865 3.76469 15.8085 4.09544 15.626L7.87694 13.5347L11.6584 15.626C11.8077 15.7085 11.9719 15.749 12.1354 15.749C12.3344 15.749 12.5334 15.6885 12.7027 15.569C13.0104 15.3517 13.1679 14.9777 13.1074 14.6055L12.3737 10.1112L15.4719 6.9345C15.7292 6.67 15.8177 6.2845 15.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip1_247_27)">
                                                <path
                                                    d="M40.7004 5.93425C40.5829 5.5845 40.2802 5.3295 39.9157 5.27375L35.6734 4.6255L33.7679 0.56625C33.6054 0.22025 33.2582 0 32.8767 0C32.4949 0 32.1479 0.22025 31.9854 0.56625L30.0797 4.62575L25.8374 5.274C25.4729 5.32975 25.1702 5.5845 25.0529 5.9345C24.9357 6.2845 25.0242 6.67 25.2819 6.9345L28.3799 10.1112L27.6462 14.6055C27.5857 14.9775 27.7434 15.3515 28.0512 15.569C28.3587 15.7865 28.7647 15.8085 29.0954 15.626L32.8769 13.5347L36.6584 15.626C36.8077 15.7085 36.9719 15.749 37.1354 15.749C37.3344 15.749 37.5334 15.6885 37.7027 15.569C38.0104 15.3517 38.1679 14.9777 38.1074 14.6055L37.3737 10.1112L40.4719 6.9345C40.7292 6.67 40.8177 6.2845 40.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip2_247_27)">
                                                <path
                                                    d="M65.7004 5.93425C65.5829 5.5845 65.2802 5.3295 64.9157 5.27375L60.6734 4.6255L58.7679 0.56625C58.6054 0.22025 58.2582 0 57.8767 0C57.4949 0 57.1479 0.22025 56.9854 0.56625L55.0797 4.62575L50.8374 5.274C50.4729 5.32975 50.1702 5.5845 50.0529 5.9345C49.9357 6.2845 50.0242 6.67 50.2819 6.9345L53.3799 10.1112L52.6462 14.6055C52.5857 14.9775 52.7434 15.3515 53.0512 15.569C53.3587 15.7865 53.7647 15.8085 54.0954 15.626L57.8769 13.5347L61.6584 15.626C61.8077 15.7085 61.9719 15.749 62.1354 15.749C62.3344 15.749 62.5334 15.6885 62.7027 15.569C63.0104 15.3517 63.1679 14.9777 63.1074 14.6055L62.3737 10.1112L65.4719 6.9345C65.7292 6.67 65.8177 6.2845 65.7004 5.93425Z"
                                                    fill="#E8C54A"
                                                />
                                            </g>
                                            <g clipPath="url(#clip3_247_27)">
                                                <path
                                                    d="M84.7682 5.05043L84.9949 5.53343L85.5224 5.61403L89.7351 6.25776L86.6578 9.41304L86.3054 9.77432L86.3868 10.2724L87.1155 14.736L83.3609 12.6597L82.8769 12.392L82.393 12.6597L78.6381 14.7362L79.3669 10.2724L79.4482 9.77435L79.0959 9.41307L76.0189 6.25788L80.2307 5.61427L80.7582 5.53368L80.9849 5.05071L82.8767 1.02095L84.7682 5.05043Z"
                                                    stroke="#E8C54A"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <g clipPath="url(#clip4_247_27)">
                                                <path
                                                    d="M109.768 5.05043L109.995 5.53343L110.522 5.61403L114.735 6.25776L111.658 9.41304L111.305 9.77432L111.387 10.2724L112.116 14.736L108.361 12.6597L107.877 12.392L107.393 12.6597L103.638 14.7362L104.367 10.2724L104.448 9.77435L104.096 9.41307L101.019 6.25788L105.231 5.61427L105.758 5.53368L105.985 5.05071L107.877 1.02095L109.768 5.05043Z"
                                                    stroke="#E8C54A"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(25)"
                                                    />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(50)"
                                                    />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(75)"
                                                    />
                                                </clipPath>
                                                <clipPath>
                                                    <rect
                                                        width={16}
                                                        height={16}
                                                        fill="white"
                                                        transform="translate(100)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </li>
                                    <li>
                                        <span>USD 190.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ratting area end */}
        </>
    )
}

export default RatingArea