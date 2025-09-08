


const FoodCard= ({ item }) => {
 
  const { name, recipe, image, price } = item;

  return (
    <div className="card bg-base-100  shadow-sm my-5">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
       <p className="bg-slate-900 text-white py-2 px-5 rounded-md absolute right-10 top-10">{price}</p>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn bg-white uppercase text-[#BB8506]  border-b-4 border-b-[#BB8506] shadow-2xl">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
