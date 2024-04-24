import BannerArea from '@/components/BannerArea';
import BannerHeader from '@/components/BannerHeader';
import BestSellers from '@/components/BestSellers';
import FeedBack from '@/components/FeedBack';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoadingArea from '@/components/LoadingArea';
import RatingArea from '@/components/RatingArea';
import RecentBlog from '@/components/RecentBlog';
import Topsale from '@/components/Topsale';
import TrendyCollection from '@/components/TrendyCollection';
import React, { useEffect, useRef } from 'react'
// import img1 from '../../../public/assets/imgs/furniture/product/off-01.png';

const index = () => {


    return (
        <React.Fragment>
            <LoadingArea />
            <>
                <Header />
                <>
                    {/* Body main wrapper start */}
                    <main>
                        <BannerHeader />
                        <Topsale />
                        <RatingArea />
                        <TrendyCollection />
                        <BannerArea />
                        <FeedBack />
                        <BestSellers />
                        <RecentBlog />
                    </main>
                    {/* Body main wrapper end */}
                    <Footer />
                </>

            </>

        </React.Fragment>
    )
}

export default index