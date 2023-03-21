import { Link } from "react-router-dom";

export const ProductItem = ({
    _id, name, imageUrl, category,
}) => {
    return (
        <div className="allProducts">
            <img src={imageUrl} />
            <h6>{category}</h6>
            <h2>{name}</h2>
            <Link to={`/catalog/${_id}`} className="detailsBtn">Details</Link>
        </div>
    )
}