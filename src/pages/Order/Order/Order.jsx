import Cover from "../../../sharde/Cover/Cover";
import orderFoodImg from "../../../assets/shop/order.jpg";
// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import drinksImg from '../../../assets/menu/soup-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

import { useState } from "react";
import useMenu from "../../../hooks/useMenu";

import { useParams } from "react-router-dom";
import OrderTab from "../OrderTab.jsx/OrderTab";

const Order = () => {
   const [menu]=useMenu()
    const [tabIndex, setTabIndex]=useState()
    const {category} =useParams();
    console.log(category)

    const dessert=menu.filter(item=>item.category === 'dessert');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const salad =menu.filter(item=>item.category === 'salad');
    const soup = menu.filter(item=>item.category=== 'soup');
    const drinks = menu.filter(item=>item.category=== 'drinks');

  return (
    
    <div>
      <Cover img={orderFoodImg} title="our shop"></Cover>

      {/* ///React Tabs// */}

      <div className="uppercase font-semibold">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab img={saladImg} item={salad}></OrderTab> 
        </TabPanel>

        <TabPanel>
          <OrderTab img={pizzaImg} item={pizza}></OrderTab> 
        </TabPanel>

        <TabPanel>
          <OrderTab img={soupImg} item={soup}></OrderTab>    
        </TabPanel>

        <TabPanel>
          <OrderTab img={dessertImg} item={dessert}></OrderTab> 
        </TabPanel>

        <TabPanel>
          <OrderTab img={drinksImg} item={drinks}></OrderTab> 
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
