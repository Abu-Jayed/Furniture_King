import Carousel from "react-multi-carousel";
import img1 from "../../assets/banner/banner-1.jpg"
import img2 from "../../assets/banner/banner-2.jpg"
import img3 from "../../assets/banner/banner-3.jpg"
import img4 from "../../assets/banner/banner-4.jpg"
import img5 from "../../assets/banner/banner-5.jpg"
import img6 from "../../assets/banner/banner-6.jpg"
import img7 from "../../assets/banner/banner-7.jpg"
import img8 from "../../assets/banner/banner-8.jpg"

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = () => {
    return (
        <div className='mt-40 md:mt-0'>
            <Carousel autoPlay autoPlaySpeed={5000} rewind rewindWithAnimation responsive={responsive}>
            <div >
                    <img className='bg-black relative' src={img6} />
                </div>
                <div >
                    <img className='bg-black relative' src={img5} />
                </div>
                <div >
                    <img className='bg-black relative' src={img1} />
                </div>
                <div >
                    <img className='bg-black relative' src={img2} />
                </div>
                <div >
                    <img className='bg-black relative' src={img3} />
                </div>
                <div >
                    <img className='bg-black relative' src={img4} />
                </div>
                <div >
                    <img className='bg-black relative' src={img7} />
                </div>
                <div >
                    <img className='bg-black relative' src={img8} />
                </div>
            </Carousel>

        </div>

    );
};

export default Banner;