import img1 from "../../../assets/Cook/Cook_1.jpg"
import img2 from "../../../assets/Cook/Cook_2.jpg"
import img3 from "../../../assets/Cook/Cook_3.jpg"
import img4 from "../../../assets/Cook/Cook_4.jpg"
import img5 from "../../../assets/Cook/Cook_5.jpg"
import img6 from "../../../assets/Cook/Cook_6.jpg"
import img7 from "../../../assets/Cook/Cook_7.jpg"
import img8 from "../../../assets/Cook/Cook_8.jpg"
import img9 from "../../../assets/Cook/Cook_9.jpg"
import img10 from "../../../assets/Cook/Cook_10.jpg"
import img11 from "../../../assets/Cook/Cook_11.jpg"
import img12 from "../../../assets/Cook/Cook_12.jpg"
import Carousel from "react-multi-carousel"
import { Link } from "react-router-dom"

const Cook = () => {
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
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12
       ]
    return (
        <div data-aos="fade-up-right" className="mt-10 bg-[rgb(242,233,226)">
            <div className="pt-10 relative">
                <div className="flex items-center justify-center">

            <h1 className=" top-4 bg-white absolute text-center text-5xl font-bold italic">Cook With Comfort</h1>
                </div>
            <hr className="w-full border border-black " />
            </div>
            <section className=" ">
            <div className='pt-5'>
            <Carousel  rewind autoPlay autoPlaySpeed={1200} rewindWithAnimation responsive={responsive}>
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

export default Cook;