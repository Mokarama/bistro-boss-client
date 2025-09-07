import {Helmet} from "react-helmet";
import Cover from "../../../sharde/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladsImg from '../../../assets/menu/salad-bg.jpg';
import soupsImg from '../../../assets/menu/soup-bg.jpg';

import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";




const Menu = () => {
    const [menu]=useMenu();
    const offered =menu.filter(item=>item.category === 'offered');
    const dessert=menu.filter(item=>item.category === 'dessert');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const salad =menu.filter(item=>item.category === 'salad');
    const soup = menu.filter(item=>item.category=== 'soup');

    return (
        <div>
            <Helmet>
             <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>

            {/* Offered section */}
            <SectionTitle subHading={"Don't miss"} hading={"Today's Offer"}></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>

            {/* Desserts section */}
            <Cover img={dessertImg} title={"Desserts"}></Cover>
            <MenuCategory item={dessert}></MenuCategory>

            {/* Pizza section */}
            <Cover img={pizzaImg} title={"Pizza"}></Cover>
            <MenuCategory item={pizza}></MenuCategory>

            {/*Salads section */}
            <Cover img={saladsImg} title={"Salad"}></Cover>
            <MenuCategory item={salad}></MenuCategory>

            {/* Soups section */}
            <Cover img={soupsImg} title={"Soups"}></Cover>
            <MenuCategory item={soup}></MenuCategory>

        </div>
    );
};

export default Menu;