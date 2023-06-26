import img_Title from "../../../assets/Kids_play/Title.png"
import thumb_1 from "../../../assets/Kids_play/thumb_1.gif"
import thumb_2 from "../../../assets/Kids_play/thumb_2.gif"
import img_1 from "../../../assets/Kids_play/img_1.jpg"
import img_2 from "../../../assets/Kids_play/img_2.jpg"
import { Link } from "react-router-dom"
import Carousel from "react-multi-carousel"

const KidsPlay = () => {
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
    const allImg = [thumb_1,thumb_2]
    return (
        <div className="mt-20">
            <img src={img_Title} alt="" />
            <div className='w-full'>
            <Carousel rewind autoPlay autoPlaySpeed={8000} rewindWithAnimation responsive={responsive}>
                {
                    allImg.map(img => {
                        return (
                            <Link key={img}>
                            <div className="" >
                                <img className="" src={img} alt="" />
                            </div>
                            </Link>
                        )
                    })
                }
            </Carousel>
        </div>
            <div className="mt-5 flex gap-4">
                <div>
                <img src={img_1} alt="" />
                </div>
                <div className="border">
                <img src={img_2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default KidsPlay;