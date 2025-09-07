
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../sharde/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu]=useMenu();
    const popular =menu.filter(item=>item.category === "popular")

    return (
        <section>
            <SectionTitle subHading={"clicl it out"} hading={"From our Menu"}></SectionTitle>
            <div>
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;