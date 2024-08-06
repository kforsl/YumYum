function ReceiptItem({ item }) {
    return (
        <article className="pb-2">
            <section className="flex justify-between text-base font-bold">
                <h2>{item.name}</h2>
                <h3>{item.price * item.inCart} SEK</h3>
            </section>

            <p className="text-xs text-left"> {item.inCart} Stycken </p>
        </article>
    );
}

export default ReceiptItem;
