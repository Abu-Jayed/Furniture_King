import { Link } from "react-router-dom";

const OfferTitle = () => {
    return (
        <div>

        <section className="flex gap-5 items-center justify-center my-4">
            <Link>
            <div className="pr-3 leading-[15px] text-center border-r-2 border-black">
                <h1 className='font-bold uppercase'>Free Delevery & Instalation</h1>
                <p>*Terms & Condition Apply</p>
            </div>
            </Link>
            <Link>
            <div className="pr-3 leading-[15px] text-center border-r-2 border-black">
                <h1 className='font-bold uppercase'>buy now pay later</h1>
                <p>*Terms & Condition Apply</p>
            </div>
            </Link>
            <Link>
            <div className="pr-3 leading-[15px] text-center border-r-2 border-black">
                <h1 className='font-bold uppercase'>Easy Return</h1>
                <p>*within 7 days</p>
            </div>
            </Link>
            <Link>
            <div className="pr-3 leading-[15px] text-center border-r-2 border-black">
                <h1 className='font-bold uppercase'>Online exclusive</h1>
                <p>Product at best price</p>
            </div>
            </Link>
            <Link>
            <div className="pr-3 leading-[15px] text-center border-r-2 border-black">
                <h1 className='font-bold uppercase'>Click & collect</h1>
                <p>*order online collect on store</p>
            </div>
            </Link>
        </section>
        <img src="https://images.ctfassets.net/058vu9hqon0j/34L4m2EJ6ocoPovMXeCeAP/5799718af2e5c1ba792f9b6b25069342/mob-eng-100.jpg" className="w-full mx-auto" alt="" />
        </div>

    );
};

export default OfferTitle;