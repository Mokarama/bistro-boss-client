
const MenuItem = ({item}) => {
    const {name,recipe, image,price} =item;
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-3"> 
            <div className="flex mb-6 p-3">
            <img className="w-[120px] rounded-sm mr-5" src={image} alt="" />
            <div>
                <h2 className="text-2xl">{name}------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>


        <div className="flex mb-6 p-3">
            <img className="w-[120px] rounded-sm mr-5" src={image} alt="" />
            <div>
                <h2 className="text-2xl">{name}------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
        </section>
    );
};

export default MenuItem;