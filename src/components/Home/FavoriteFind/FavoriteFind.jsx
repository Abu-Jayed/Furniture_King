import img1 from "../../../assets/Favourite_find/Favrite_1.png"
import img2 from "../../../assets/Favourite_find/Favrite_2.png"
import img3 from "../../../assets/Favourite_find/Favrite_3.png"
import img4 from "../../../assets/Favourite_find/Favrite_4.png"
import img5 from "../../../assets/Favourite_find/Favrite_5.png"
import img6 from "../../../assets/Favourite_find/Favrite_6.png"
import img7 from "../../../assets/Favourite_find/Favrite_7.png"
import img8 from "../../../assets/Favourite_find/Favrite_8.png"
import img9 from "../../../assets/Favourite_find/Favrite_9.png"
import img10 from "../../../assets/Favourite_find/Favrite_10.png"
import img11 from "../../../assets/Favourite_find/Favrite_11.png"
import Carousel from "react-multi-carousel"
import { Link } from "react-router-dom"

const FavoriteFind = () => {
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
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11
       ]
    return (
        <div className="mt-10 bg-[rgb(242,233,226)]">
            <div className="pt-10 relative">
                <div className="flex items-center justify-center">

            <h1 className=" top-4 bg-[rgb(242,233,226)] absolute text-center text-5xl font-bold italic">Favourite Finds</h1>
                </div>
            <hr className="w-full border border-black " />
            </div>
            <section className=" ">
            <div className='pt-5'>
            <Carousel  rewind autoPlay autoPlaySpeed={2000} rewindWithAnimation responsive={responsive}>
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

export default FavoriteFind;