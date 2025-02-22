
import { Link } from "react-router-dom"
import "./Product.css"


export default function Product({ product }) {

    return <Link to={`/ecommerce/${product.id}`} className="flex flex-col items-center border  h-[300px] w-[250px] rounded-[10px] m-2">
        <img className="rounded-[10px] w-[300px] h-[200px] m-4 p-2" src={`/ecommerce/images/${product.imageUrl}`} />
        <p>{product.name}</p>
        <p>{product.price}</p>
    </Link>


}