import img1 from "../../../assets/Plante/img_1.jpg"
import img2 from "../../../assets/Plante/img_2.jpg"
import img3 from "../../../assets/Plante/img_3.jpg"
import img4 from "../../../assets/Plante/img_4.jpg"
import img5 from "../../../assets/Plante/img_7.jpg"
import img6 from "../../../assets/Plante/img_6.png"
import img7 from "../../../assets/Plante/img_5.png"
import img8 from "../../../assets/Plante/img_8.png"
import thumb_1 from "../../../assets/Plante/img_title.jpg"

import Carousel from "react-multi-carousel"
import { Link } from "react-router-dom"

const Plante = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
    const allImg = [
        img1,img2,img3,img4,img5,img6,img7,img8
       ]
    return (
        <div data-aos="" className="mt-12 bg-[rgb(242,233,226)">
            <div className="pt-10 relative">
                <img src={thumb_1} alt="" />
            </div>
            <section className=" ">
            <div className='pt-3'>
            <Carousel  rewind autoPlay autoPlaySpeed={4300} rewindWithAnimation responsive={responsive}>
                {
                    allImg.map(img => {
                        return (
                            <Link key={img}>
                            <div className="p-3" >
                                <img src={img} alt="" />
                            </div>
                            </Link>
                        )
                    })
                }
            </Carousel>
        </div>
            </section>
        </div>
    );
};

export default Plante;