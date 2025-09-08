import FoodCard from "../../../sharde/FoodCard/FoodCard";






const OrderTab = ({item}) => {
    return (
      
             <div className=" grid grid-cols-3 gap-7">
                            {
                            item.map(item=><FoodCard item={item} key={item._id}></FoodCard>)
                          }
                        </div>
      
    );
};

export default OrderTab;