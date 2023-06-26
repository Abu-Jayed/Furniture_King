import img1 from "../../../assets/OutDoor/img_1.jpg"
import img2 from "../../../assets/OutDoor/img_2.jpg"
import img3 from "../../../assets/OutDoor/img_3.jpg"
import img4 from "../../../assets/OutDoor/img_4.jpg"
import img5 from "../../../assets/OutDoor/img_5.jpg"
import img6 from "../../../assets/OutDoor/img_6.jpg"
import img7 from "../../../assets/OutDoor/img_7.jpg"
import img8 from "../../../assets/OutDoor/img_8.jpg"
import img9 from "../../../assets/OutDoor/img_9.jpg"
import img10 from "../../../assets/OutDoor/img_10.jpg"
import thumb_1 from "../../../assets/OutDoor/OutDoor_Thumble.jpg"

import Carousel from "react-multi-carousel"
import { Link } from "react-router-dom"

const OutDoor = () => {
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
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10
       ]
    return (
        <div className="mt-12 bg-[rgb(242,233,226)">
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

export default OutDoor;