import { Link } from "react-router-dom";
import Cover from "../../../sharde/Cover/Cover";
import MenuItem from "../../../sharde/MenuItem/MenuItem";

const MenuCategory = ({ item, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title="Our menu"></Cover>}

      <div>
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Link to={`/order/${title}`}>
         <button className="btn uppercase border-b-5 rounded-2xl border-[#BB8506] mb-3">
        Order Now
      </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
