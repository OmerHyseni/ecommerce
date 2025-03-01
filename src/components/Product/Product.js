import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({ product }) {

    return (
        <Link
            to={`/ecommerce/${product.id}`}
            className="flex flex-col items-center border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 m-4 w-[250px] h-[350px] bg-white"
        >
            <img
                className="w-[220px] h-[200px] object-cover rounded-t-lg p-4"
                src={`/ecommerce/images/${product.imageUrl}`}
                alt={product.name}
            />
            <div className="flex flex-col items-center p-2 w-full">
                <p className="text-xl font-semibold text-gray-800 truncate w-full">{product.name}</p>
                <p className="text-green-600 text-lg font-bold mt-2">${product.price}</p>
            </div>
        </Link>
    )
}
    