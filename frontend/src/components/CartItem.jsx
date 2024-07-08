import { addToCart, getCartFromStorage, removeFromCart } from '../utility/cartFunctions';

function CartItem({ item, handleCartState }) {

    return (
        <article className="py-2">
            <section className="flex justify-between text-2xl">
                <h2>{item.name}</h2>
                <h3>{item.price * item.inCart} SEK</h3>
            </section>

            <section className="flex content-center gap-2">
                <img
                    className="p-1 bg-gray-lightest rounded-full aspect-square size-6 ease-in-out duration-100 active:scale-90"
                    src="../src/assets/plus.svg"
                    alt="Add to cart"
                    onClick={() => {
                        addToCart(item)
                        handleCartState()
                    }}
                />
                <p className="text-sm my-auto"> {item.inCart} Stycken </p>
                <img
                    className="p-1 bg-gray-lightest rounded-full aspect-square size-6 ease-in-out duration-100 active:scale-90"
                    src="../src/assets/minus.svg"
                    alt="Remove from cart"
                    onClick={() => {
                        removeFromCart(item)
                        handleCartState()
                    }}
                />
            </section>
        </ article >
    )
}

export default CartItem