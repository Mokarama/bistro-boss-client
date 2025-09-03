const ChefCard = ({ item }) => {
    const {name,recipe, image } =item;
  return (
    <div className="card bg-[#f5eeee] gap-5  shadow-sm ">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
         {recipe}
        </p>
        <div className="card-actions">
          <button className="btn uppercase text-[#BB8506] border-b-2 border-b-[#BB8506] ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
