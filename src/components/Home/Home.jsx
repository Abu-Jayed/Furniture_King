import Banner from "./Banner";
import EidDeals from "./EidDeals/EidDeals";
import FavoriteFind from "./FavoriteFind/FavoriteFind";
import KidsPlay from "./KidsPlay/KidsPlay";
import OfferTitle from "./OfferTitle/OfferTitle";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OfferTitle></OfferTitle>
            <EidDeals></EidDeals>
            <FavoriteFind></FavoriteFind>
            <KidsPlay></KidsPlay>
        </div>
    );
};

export default Home;