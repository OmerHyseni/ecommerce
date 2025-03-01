import { useEffect } from "react";
import Product from "./components/Product/Product";

export default function CartItemsPage({ cartItems, setCartItems, totalPrice, setTotalPrice }) {

    useEffect(() => {
        setTotalPrice(cartItems.reduce((acc, p) => acc + p.price, 0))
    }, [cartItems])

    function removeProduct(productId) {
        setCartItems(prev => prev.filter((p) => p.id !== productId))
    }

    return (
        <div className="p-4">
            {cartItems.length === 0 ?
                <p className="text-lg text-center text-gray-500">No products in cart</p> :
                <>
                    <div className="space-y-4">
                        {cartItems.map((product) => {
                            return (
                                <div key={product.id} className="border-b pb-4 flex justify-between items-center">
                                    <h1 className="text-xl font-semibold">{product.name}</h1>
                                    <button
                                        onClick={() => removeProduct(product.id)}
                                        className="text-sm text-red-500 hover:text-red-700"
                                    >
                                        Remove product
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <p className="mt-4 text-lg font-semibold">Total Price: <span className="text-green-600">{Math.ceil(totalPrice)} $</span></p>
                </>
            }
        </div>
    )
}
