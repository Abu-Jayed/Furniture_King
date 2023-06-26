import Carousel from "react-multi-carousel";
import imgDeal from "../../../assets/Eid-deals/deal_banner.png"
import img1 from "../../../assets/Eid-deals/deal1.jpg"
import img2 from "../../../assets/Eid-deals/deal2.jpg"
import img3 from "../../../assets/Eid-deals/deal3.jpg"
import img4 from "../../../assets/Eid-deals/deal4.jpg"
import img5 from "../../../assets/Eid-deals/deal5.jpg"
import img6 from "../../../assets/Eid-deals/deal6.jpg"
import img7 from "../../../assets/Eid-deals/deal7.jpg"
import img8 from "../../../assets/Eid-deals/deal8.jpg"
import img9 from "../../../assets/Eid-deals/deal9.jpg"
import img10 from "../../../assets/Eid-deals/deal10.jpg"
import img11 from "../../../assets/Eid-deals/deal11.jpg"
import img12 from "../../../assets/Eid-deals/deal12.jpg"
import img13 from "../../../assets/Eid-deals/deal13.jpg"
import img14 from "../../../assets/Eid-deals/deal14.jpg"
import img15 from "../../../assets/Eid-deals/deal15.jpg"
import img16 from "../../../assets/Eid-deals/deal16.jpg"
import img17 from "../../../assets/Eid-deals/deal17.jpg"
import img18 from "../../../assets/Eid-deals/deal18.jpg"
import img19 from "../../../assets/Eid-deals/deal19.jpg"
import img20 from "../../../assets/Eid-deals/deal20.jpg"
import { Link } from "react-router-dom";

const EidDeals = () => {
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
     img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20
    ]
    return (
        <div className="bg-[rgb(216,200,204)] mt-20">
            <div className="p-4">
        <img src={imgDeal} alt="" />
            <div className='mt-40 md:mt-0'>
            <Carousel rewind autoPlay autoPlaySpeed={2000} rewindWithAnimation responsive={responsive}>
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
            </div>
        </div>
    );
};

export default EidDeals;