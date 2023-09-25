import Welcome from "../components/home/welcome";
import Filter from "../components/cars/filter";
import List from "../components/cars/list";

const Cars = () => {
    return(
        <>
            <Welcome />
            <Filter />
            <List />
        </>
    );
};

export default Cars;