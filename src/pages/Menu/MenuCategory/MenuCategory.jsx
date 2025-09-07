import Cover from "../../../sharde/Cover/Cover";
import MenuItem from "../../../sharde/MenuItem/MenuItem";

const MenuCategory = ({item, title, coverImg}) => {
    return (
        <div>
            { title && <Cover img={coverImg} title="Our menu"></Cover>}
            {
                    item.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
        </div>
    );
};

export default MenuCategory;