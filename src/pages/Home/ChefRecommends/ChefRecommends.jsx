import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefCard from "../ChefCard/ChefCard";

const ChefRecommends = () => {
    const [ info, setInfo] =useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data => {
            const chefItems = data.filter(item =>item.category === 'popular');
           setInfo(chefItems);
        })
    },[])
  return (
    <div className="">
      <SectionTitle
        subHading={"should try"}
        hading={"chef recommends"}
      ></SectionTitle>

      {/* ***card */}
      <section className="border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {
                    info.map(item =><ChefCard item={item} key={item._id}></ChefCard>)
                }
      </section>
    </div>
  );
};

export default ChefRecommends;
