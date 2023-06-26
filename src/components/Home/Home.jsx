import Banner from "./Banner";
import Cook from "./Cook/Cook";
import EidDeals from "./EidDeals/EidDeals";
import FavoriteFind from "./FavoriteFind/FavoriteFind";
import KidsPlay from "./KidsPlay/KidsPlay";
import OfferTitle from "./OfferTitle/OfferTitle";
import OutDoor from "./OutDoor/OutDoor";
import Plante from "./Plante/Plante";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OfferTitle></OfferTitle>
            <EidDeals></EidDeals>
            <FavoriteFind></FavoriteFind>
            <KidsPlay></KidsPlay>
            <Cook></Cook>
            <OutDoor></OutDoor>
            <Plante></Plante>
        </div>
    );
};

export default Home;