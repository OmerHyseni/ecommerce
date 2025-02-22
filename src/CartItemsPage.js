import Product from "./components/Product/Product";

export default function CartItemsPage({ cartItems }) {

    return (
        <div>
            {cartItems.map((product) => {
                return (
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}