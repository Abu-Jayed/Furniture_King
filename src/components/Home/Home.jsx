import Banner from "./Banner";
import Cook from "./Cook/Cook";
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
            <Cook></Cook>
        </div>
    );
};

export default Home;