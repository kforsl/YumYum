const OrderItem = ({ item }) => {
    return (
        <article className="flex justify-between text-base font-bold">
            <h3>{item.name}</h3>
            <div className="flex gap-6">
                <h3> {item.inCart} st </h3>
                <h4> {item.inCart * item.price} sek</h4>
            </div>
        </article>
    );
};

export default OrderItem;
