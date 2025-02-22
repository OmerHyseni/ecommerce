import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "./components/Product/Product";

function SelectedProduct({ setCartItems,cartItems }) {
    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`/ecommerce/api/products/${id}.json`).then(res => res.json()).then(data => setProduct(data))

    }, [])

    function addToCartBtn() {
        const productExists = cartItems.find((p) => p.id === product.id)
        setCartItems(prev => ([...prev, product]))
        alert("hello")

    }

    return <>
        <div className="flex items-center justify-center min-h-screen">
            <img className="rounded-[10px] w-[300px] m-4 p-2" src={`/ecommerce/images/${product.imageUrl}`} />
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <div className="">
                    <button onClick={addToCartBtn} className="bg-blue-100 hover:bg-blue-200 p-2 rounded-[5px]">Add to cart</button>
                </div>
            </div>
        </div>
    </>
}

export default SelectedProduct;