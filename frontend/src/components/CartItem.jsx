function CartItem({ item }) {

    return (
        <article className="py-2">
            <section className="flex justify-between text-2xl">
                <h2>{item.name}</h2>
                <h3>{item.price * item.inCart} SEK</h3>
            </section>

            <section className="flex content-center gap-2">
                <img className="p-1 bg-gray-lightest rounded-full aspect-square size-6" src="../src/assets/plus.svg" alt="" />
                <p className="text-sm my-auto"> {item.inCart} Stycken </p>
                <img className="p-1 bg-gray-lightest rounded-full aspect-square size-6" src="../src/assets/minus.svg" alt="" />
            </section>
        </ article >
    )
}

export default CartItem